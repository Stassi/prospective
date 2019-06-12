import React from 'react'
import TextFieldMui from '@material-ui/core/TextField'
import { textField as enhance } from '../src/enhancers'

const TextField = ({
  onChange,
  value,
  classes: { textField },
  ...props
}) => (
  <TextFieldMui
    {...{ onChange, value }}
    className={textField}
    {...props}
  />
)

const EnhancedTextField = enhance(TextField)

export default EnhancedTextField
