import React from 'react'
import AlgorithmMenuSelect from './AlgorithmMenuSelect'
import SeedTextField from './SeedTextField'
import { debugContainer as enhance } from '../../src/enhancers'

const DebugContainer = ({
  classes: {
    formControl,
    selectEmpty,
    textField
  }
}) => (
  <form
    autoComplete='off'
    noValidate
  >
    <SeedTextField classes={{ textField }} />
    <AlgorithmMenuSelect classes={{ formControl, selectEmpty }} />
  </form>
)

const EnhancedDebugContainer = enhance(DebugContainer)

export default EnhancedDebugContainer
