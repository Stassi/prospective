import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import LocalFlorist from '@material-ui/icons/LocalFlorist'
import TextField from '@material-ui/core/TextField'

const InputProps = {
  startAdornment: (
    <InputAdornment position='start'>
      <IconButton>
        <LocalFlorist />
      </IconButton>
    </InputAdornment>
  )
}

const SeedTextField = ({ textField, ...props }) => (
  <TextField
    {...{
      InputProps,
      ...textField
    }}
    id='seed'
    label='Seed'
    type='search'
    {...props}
  />
)

export default SeedTextField
