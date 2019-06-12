import { withStyles } from '@material-ui/core'

const useStyles = withStyles(({ spacing }) => ({
  formControl: {
    margin: spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: spacing(2)
  }
}))

export default useStyles
