import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm/index'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'
import Header from './components/Header'
import Navbar from './components/Navbar'
import VideoCard from './components/VideoCard'
import SavedVideos from './components/SavedVideos'
import TrendingVideos from './components/TrendingVideos'
import Gaming from './components/Gaming'
import './App.css'

const getCartListFromLocalStorage = () => {
  const stringifiedCartList = localStorage.getItem('savedVideos')
  const parsedCartList = JSON.parse(stringifiedCartList)
  if (parsedCartList === null) {
    return []
  }
  return parsedCartList
}
// Replace your code here
class App extends Component {
  state = {activeTheme: 'light', savedVideos: getCartListFromLocalStorage()}

  toggleTheme = activeTheme => {
    this.setState({activeTheme})
  }

  addToSavedVideos = videoDetails => {
    const {savedVideos} = this.state
    if (savedVideos.length > 0) {
      const checkSavedVideos = savedVideos.filter(
        eachData => eachData.id === videoDetails.id,
      )
      if (checkSavedVideos.length === 0) {
        this.setState({savedVideos: [...savedVideos, videoDetails]})
      }
    } else {
      const updatedSavedList = [...savedVideos, videoDetails]
      this.setState({savedVideos: updatedSavedList})
    }
  }

  removeSavedItems = id => {
    const {savedVideos} = this.state
    const updatedCartList = savedVideos.filter(
      eachCartItem => eachCartItem.id !== id,
    )
    this.setState({savedVideos: updatedCartList})
  }

  render() {
    const {activeTheme, savedVideos} = this.state
    localStorage.setItem('savedVideos', JSON.stringify(savedVideos))

    const bgColor = activeTheme === 'light' ? 'light' : 'dark'
    return (
      <ThemeContext.Provider
        value={{
          activeTheme,
          savedVideos,
          toggleTheme: this.toggleTheme,
          addToSavedVideos: this.addToSavedVideos,
          removeSavedItems: this.removeSavedItems,
        }}
      >
        <>
          <div className="app-container">
            <Switch>
              <Route exact path="/login" component={LoginForm} />
              <>
                <Header />
                <div className={`${bgColor} main-frame-container`}>
                  <Navbar />
                  <div className="content">
                    <Switch>
                      <ProtectedRoute exact path="/" component={Home} />
                      <ProtectedRoute
                        exact
                        path="/trending"
                        component={TrendingVideos}
                      />
                      <ProtectedRoute exact path="/gaming" component={Gaming} />
                      <ProtectedRoute
                        exact
                        path="/saved-videos"
                        component={SavedVideos}
                      />
                      <ProtectedRoute
                        exact
                        path="/videos/:id"
                        component={VideoCard}
                      />
                    </Switch>
                  </div>
                </div>
              </>
            </Switch>
          </div>
        </>
      </ThemeContext.Provider>
    )
  }
}

export default App
