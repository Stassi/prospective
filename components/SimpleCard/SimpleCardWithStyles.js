import { withStyles } from '@material-ui/styles'
import SimpleCard from './SimpleCard'

const styles = {
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  card: { minWidth: 275 },
  pos: { marginBottom: 12 },
  title: { fontSize: 14 }
}

const SimpleCardWithStyles = withStyles(styles)(SimpleCard)

export default SimpleCardWithStyles
