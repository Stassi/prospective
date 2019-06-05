import React from 'react'

const useLabelPlaceholder = Component => ({ value, ...props }) => (
  <Component
    {...props}
    {...{ value }}
    labelPlaceholder={`${value}-label-placeholder`}
  />
)

export default useLabelPlaceholder
