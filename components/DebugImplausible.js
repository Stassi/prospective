import React from 'react'
import { debugImplausible as enhance } from '../src/enhancers'

const DebugImplausible = ({
  output,
  menuSelect: {
    selected: selectedMenuOption
  },
  textField: {
    value: textFieldValue
  }
}) => (
  <>
    Algorithm: {selectedMenuOption}
    <br />
    Seed: {textFieldValue}
    <br />
    Path: {selectedMenuOption}/{textFieldValue}
    <br />
    Output: {output}
  </>
)

const EnhancedDebugImplausible = enhance(DebugImplausible)

export default EnhancedDebugImplausible
