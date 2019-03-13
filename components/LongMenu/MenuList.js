import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItems from './MenuItems'

const MenuList = ({
  actions,
  anchorEl,
  isOpen,
  menuID,
  actions: { close },
  ...props
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
    <MenuItems {...{ ...props, actions }} />
  </Menu>
)

export default MenuList
