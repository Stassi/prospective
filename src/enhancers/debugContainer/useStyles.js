import { withStyles } from '@material-ui/core'

const container = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
})

const menuSelect = spacing => ({
  formControl: {
    margin: spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: spacing(2)
  }
})

const textField = spacing => ({
  textField: {
    marginLeft: spacing(1),
    marginRight: spacing(1),
    width: 200
  }
})

const useStyles = withStyles(({ spacing }) => ({
  ...container(),
  ...menuSelect(spacing),
  ...textField(spacing)
}))

export default useStyles
