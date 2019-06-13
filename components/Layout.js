import React from 'react'
import AlgorithmMenuSelect from './AlgorithmMenuSelect'
import AppBar from './AppBar'
import DebugOuterContainer from './DebugOuterContainer'
import SeedTextField from './SeedTextField'
import ThemeButton from './ThemeButton'
import { layout as enhance } from '../src/enhancers'

const Layout = ({
  toggleDarkTheme,
  classes: {
    formControl,
    selectEmpty,
    textField: textFieldClass
  }
}) => (
  <DebugOuterContainer>
    {({ menuSelect, textField }) => (
      <AppBar>
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
        <ThemeButton {...{ toggleDarkTheme }} />
      </AppBar>
    )}
  </DebugOuterContainer>
)

const EnhancedLayout = enhance(Layout)

export default EnhancedLayout
