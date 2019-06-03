import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'

const menuItems = options => options.map(({ label, value }) => (
  <MenuItem {...{
    value,
    key: value
  }}>
    {label}
  </MenuItem>
))

export default menuItems
