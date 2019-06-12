import React from 'react'
import { debugContainer as enhance } from '../src/enhancers'
import SeedTextField from './SeedTextField'
import AlgorithmMenuSelect from './AlgorithmMenuSelect'

const DebugContainer = ({ classes: { root } }) => (
  <form
    autoComplete='off'
    className={root}
    noValidate
  >
    <SeedTextField />
    <AlgorithmMenuSelect />
  </form>
)

const EnhancedDebugContainer = enhance(DebugContainer)

export default EnhancedDebugContainer
