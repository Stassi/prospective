import React from 'react'
import TextFieldMui from '@material-ui/core/TextField'
import { textField as enhance } from '../src/enhancers'

const TextField = ({
  onChange,
  value,
  classes: {
    container,
    textField
  },
  ...props
}) => (
  <form
    autoComplete='off'
    className={container}
    noValidate
  >
    <TextFieldMui
      {...{ onChange, value }}
      className={textField}
      {...props}
    />
  </form>
)

const EnhancedTextField = enhance(TextField)

export default EnhancedTextField
