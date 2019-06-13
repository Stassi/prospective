import React from 'react'
import AlgorithmMenuSelect from './AlgorithmMenuSelect'
import SeedTextField from './SeedTextField'
import { debugContainer as enhance } from '../../src/enhancers'

const DebugContainer = ({
  menuSelect,
  textField,
  classes: {
    formControl,
    selectEmpty,
    textField: textFieldClass
  }
}) => (
  <form
    autoComplete='off'
    noValidate
  >
    <SeedTextField
      {...{ textField }}
      classes={{ textField: textFieldClass }}
    />
    <AlgorithmMenuSelect
      {...{ menuSelect }}
      classes={{ formControl, selectEmpty }}
    />
  </form>
)

const EnhancedDebugContainer = enhance(DebugContainer)

export default EnhancedDebugContainer
