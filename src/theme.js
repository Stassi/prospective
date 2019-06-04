import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// TODO: Personalize
const paletteOptions = {
  error: {
    main: red.A400
  },
  primary: {
    main: '#556cd6'
  },
  secondary: {
    main: '#19857b'
  }
}

const theme = darkThemeEnabled => createMuiTheme({
  palette: {
    ...paletteOptions,
    ...darkThemeEnabled ? { type: 'dark' } : {}
  }
})

export default theme
