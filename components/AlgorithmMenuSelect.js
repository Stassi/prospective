import React from 'react'
import MenuSelect from './MenuSelect'
import implausibleAlgorithms from '../src/implausibleAlgorithms'

const AlgorithmMenuSelect = props => (
  <MenuSelect
    {...props}
    initialSelected='arc4'
    label='Algorithm'
    options={implausibleAlgorithms}
    value='algorithm'
  />
)

export default AlgorithmMenuSelect
