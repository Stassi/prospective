import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'

const MenuItems = ({
  options,
  optionSelected,
  actions: { close }
}) => options.map(option => (
  <MenuItem
    key={option}
    onClick={close}
    selected={optionSelected(option)}
  >
    {option}
  </MenuItem>
))

export default MenuItems
