import { withStyles } from '@material-ui/styles'
import CenteredGrid from './CenteredGrid'

const styles = {
  root: {
    flexGrow: 1,
    padding: 32
  }
}

const CenteredGridWithStyles = withStyles(styles)(CenteredGrid)

export default CenteredGridWithStyles
