import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import LocalFlorist from '@material-ui/icons/LocalFlorist'
import TextField from '@material-ui/core/TextField'

const SeedTextField = ({
  textField: {
    reseedOnAdornmentClick: onClick,
    ...textField
  },
  ...props
}) => (
  <TextField
    {...{
      ...textField,
      InputProps: {
        startAdornment: (
          <InputAdornment position='start'>
            <IconButton {...{ onClick }}>
              <LocalFlorist />
            </IconButton>
          </InputAdornment>
        )
      }
    }}
    id='seed'
    label='Seed'
    type='search'
    {...props}
  />
)

export default SeedTextField
