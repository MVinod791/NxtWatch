import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm/index'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'
import Header from './components/Header'
import Navbar from './components/Navbar'

import './App.css'

// Replace your code here
class App extends Component {
  state = {activeTheme: 'light'}

  toggleTheme = activeTheme => {
    this.setState({activeTheme})
  }

  render() {
    const {activeTheme} = this.state
    const bgColor = activeTheme === 'light' ? 'light' : 'dark'
    return (
      <ThemeContext.Provider
        value={{activeTheme, toggleTheme: this.toggleTheme}}
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
