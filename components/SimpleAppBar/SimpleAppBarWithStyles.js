import { withStyles } from '@material-ui/styles'
import SimpleAppBar from './SimpleAppBar'

const style = {
  grow: { flexGrow: 1 },
  root: { flexGrow: 1 }
}

const SimpleAppBarWithStyles = withStyles(style)(SimpleAppBar)

export default SimpleAppBarWithStyles
