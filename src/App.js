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
import './App.css'

// Replace your code here
class App extends Component {
  state = {activeTheme: 'light', savedVideos: []}

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

  render() {
    const {activeTheme, savedVideos} = this.state
    const bgColor = activeTheme === 'light' ? 'light' : 'dark'
    return (
      <ThemeContext.Provider
        value={{
          activeTheme,
          savedVideos,
          toggleTheme: this.toggleTheme,
          addToSavedVideos: this.addToSavedVideos,
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
