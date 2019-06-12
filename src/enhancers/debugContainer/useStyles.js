import { withStyles } from '@material-ui/core'

const menuSelect = spacing => ({
  formControl: {
    marginLeft: spacing(1),
    marginRight: spacing(1),
    minWidth: 100
  },
  selectEmpty: {
    marginTop: spacing(2)
  }
})

const textField = spacing => ({
  textField: {
    marginLeft: spacing(1),
    marginRight: spacing(1)
  }
})

const useStyles = withStyles(({ spacing }) => ({
  ...menuSelect(spacing),
  ...textField(spacing)
}))

export default useStyles
