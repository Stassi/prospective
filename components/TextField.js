import React from 'react'
import TextFieldMui from '@material-ui/core/TextField'
import { textField as enhance } from '../src/enhancers'

const TextField = ({
  textField,
  classes: {
    textField: textFieldClass
  },
  ...props
}) => (
  <TextFieldMui
    className={textFieldClass}
    {...textField}
    {...props}
  />
)

const EnhancedTextField = enhance(TextField)

export default EnhancedTextField
