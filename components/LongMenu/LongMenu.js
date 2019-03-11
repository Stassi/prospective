import React from 'react'
import MenuButton from './MenuButton'
import MenuList from './MenuList'

const LongMenu = ({ ...props }) => (
  <>
    <MenuButton {...props} />
    <MenuList {...props} />
  </>
)

export default LongMenu
