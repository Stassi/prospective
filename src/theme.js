import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// TODO: Personalize
const options = {
  palette: {
    background: {
      default: '#fff'
    },
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
}

const theme = (props = {}) => createMuiTheme({
  ...options,
  ...props
})

export default theme
