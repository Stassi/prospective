import React from 'react'
import SimpleSelect from './SimpleSelect'

const SimpleSelectWithLabelPlaceholder = ({ labelID, ...props }) => (
  <SimpleSelect {...{
    ...props,
    labelID,
    labelPlaceholder: `${labelID}-label-placeholder`
  }} />
)

export default SimpleSelectWithLabelPlaceholder
