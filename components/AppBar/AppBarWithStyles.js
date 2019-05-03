import { withStyles } from '@material-ui/styles'
import AppBar from './AppBar'

const style = {
  grow: { flexGrow: 1 },
  root: { flexGrow: 1 }
}

const AppBarWithStyles = withStyles(style)(AppBar)

export default AppBarWithStyles
