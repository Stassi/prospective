import React from 'react'
import AlgorithmMenuSelect from './AlgorithmMenuSelect'
import SeedTextField from './SeedTextField'
import { debugContainer as enhance } from '../src/enhancers'

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
