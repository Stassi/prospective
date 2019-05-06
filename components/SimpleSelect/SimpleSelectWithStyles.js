import { withStyles } from '@material-ui/styles'
import SimpleSelect from './SimpleSelect'

const styles = ({
  formControl: {
    margin: 8,
    minWidth: 120
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  selectEmpty: {
    marginTop: 8 * 2
  }
})

export default withStyles(styles)(SimpleSelect)
