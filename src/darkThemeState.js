const darkThemeState = ({
  usingState: [
    darkThemeEnabled,
    setState
  ]
}) => ({
  darkTheme: {
    enabled: darkThemeEnabled,
    toggle: () => setState(!darkThemeEnabled)
  }
})

export default darkThemeState
