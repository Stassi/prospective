import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const MenuList = ({
  anchorEl,
  isOpen,
  menuID,
  options,
  optionSelected,
  actions: { close }
}) => (
  <Menu
    anchorEl={anchorEl}
    id={menuID}
    onClose={close}
    open={isOpen}
    PaperProps={{
      style: {
        maxHeight: 216,
        width: 200
      }
    }}
  >
    {options.map(option => (
      <MenuItem
        key={option}
        onClick={close}
        selected={optionSelected(option)}
      >
        {option}
      </MenuItem>
    ))}
  </Menu>
)

export default MenuList
