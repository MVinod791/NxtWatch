import React from 'react'

const ThemeContext = React.createContext({
  activeTheme: 'light',
  toggleTheme: () => {},
  savedVideos: [],
  addToSavedVideos: () => {},
})

export default ThemeContext
