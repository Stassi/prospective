import React from 'react'
import MenuSelect from './MenuSelect'

const MenuSelectWithLabelPlaceholder = ({ value, ...props }) => (
  <MenuSelect {...{
    ...props,
    value,
    labelPlaceholder: `${value}-label-placeholder`
  }} />
)

export default MenuSelectWithLabelPlaceholder
