import React from 'react'
import MenuSelect from '../MenuSelect'

const AlgorithmMenuSelect = props => (
  <MenuSelect
    label='Algorithm'
    options={[
      { label: 'Alea', value: 'alea' },
      { label: 'Arc4', value: 'arc4' },
      { label: 'Tychei', value: 'tychei' },
      { label: 'Xor128', value: 'xor128' },
      { label: 'Xor4096', value: 'xor4096' },
      { label: 'Xorshift7', value: 'xorshift7' },
      { label: 'Xorwow', value: 'xorwow' }
    ]}
    value='algorithm'
    {...props}
  />
)

export default AlgorithmMenuSelect
