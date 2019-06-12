import { withStyles } from '@material-ui/core'

const useStyles = withStyles(({ spacing }) => ({
  textField: {
    marginLeft: spacing(1),
    marginRight: spacing(1),
    width: 200
  }
}))

export default useStyles
