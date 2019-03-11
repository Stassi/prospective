import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const MenuButton = ({ ariaIconButtonOwns, actions: { open } }) => (
  <IconButton
    aria-haspopup='true'
    aria-label='More'
    aria-owns={ariaIconButtonOwns}
    onClick={open}
  >
    <MoreVertIcon />
  </IconButton>
)

export default MenuButton
