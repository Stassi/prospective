const darkThemeState = ({
  usingState: [
    darkThemeEnabled,
    setState
  ]
}) => ({
  darkThemeEnabled,
  actions: {
    toggleDarkTheme: () => setState(!darkThemeEnabled)
  }
})

export default darkThemeState
