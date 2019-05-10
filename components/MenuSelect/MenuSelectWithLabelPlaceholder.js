import React from 'react'
import MenuSelect from './MenuSelect'

const MenuSelectWithLabelPlaceholder = ({ labelID, ...props }) => (
  <MenuSelect {...{
    ...props,
    labelID,
    labelPlaceholder: `${labelID}-label-placeholder`
  }} />
)

export default MenuSelectWithLabelPlaceholder
