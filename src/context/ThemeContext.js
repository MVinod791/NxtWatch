import React from 'react'

const ThemeContext = React.createContext({
  activeTheme: 'light',
  toggleTheme: () => {},
  savedVideos: [],
  addToSavedVideos: () => {},
  removeSavedItems: () => {},
})

export default ThemeContext
