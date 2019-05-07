import React, { useState } from 'react'
import SimpleSelect from './SimpleSelect'

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
  <SimpleSelect {...{
    ...props,
    ...selectedState({
      usingState: useState('')
    })
  }} />
)

export default SimpleSelectUsingState
