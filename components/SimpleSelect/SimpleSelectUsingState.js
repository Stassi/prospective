import React, { useState } from 'react'
import SimpleSelectWithLabelPlaceholder from './SimpleSelectWithLabelPlaceholder'

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

const SimpleSelectUsingState = ({ ...props }) => (
  <SimpleSelectWithLabelPlaceholder {...{
    ...props,
    ...selectedState({
      usingState: useState('')
    })
  }} />
)

export default SimpleSelectUsingState
