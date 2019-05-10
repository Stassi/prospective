import React, { useState } from 'react'
import MenuSelectWithLabelPlaceholder from './MenuSelectWithLabelPlaceholder'

const selectedState = ({
  usingState: [
    selected,
    setState
  ]
}) => ({
  selected,
  actions: {
    setSelected: ({ target: { value } }) => setState(value)
  }
})

const MenuSelectUsingState = ({ ...props }) => (
  <MenuSelectWithLabelPlaceholder {...{
    ...props,
    ...selectedState({
      usingState: useState('')
    })
  }} />
)

export default MenuSelectUsingState
