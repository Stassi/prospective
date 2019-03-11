import React, { useState } from 'react'
import LongMenu from './LongMenu'

const menuID = 'long-menu'
const menuState = ({
  selectedOption,
  usingState: [
    anchorEl,
    setAnchorEl
  ]
}) => ({
  anchorEl,
  menuID,
  actions: {
    close: () => setAnchorEl(null),
    open: ({ currentTarget }) => setAnchorEl(currentTarget)
  },
  ariaIconButtonOwns: anchorEl ? menuID : undefined,
  isOpen: Boolean(anchorEl),
  optionSelected: option => option === selectedOption
})

const LongMenuUsingState = ({ selectedOption, ...props }) => (
  <LongMenu {...{
    ...props,
    ...menuState({
      selectedOption,
      usingState: useState(null)
    })
  }} />
)

export default LongMenuUsingState
