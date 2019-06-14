import React from 'react'
import AlgorithmMenuSelect from './AlgorithmMenuSelect'
import AppBar from './AppBar'
import DebugImplausible from './DebugImplausible'
import DebugOuterContainer from './DebugOuterContainer'
import SeedTextField from './SeedTextField'
import ThemeButton from './ThemeButton'

const Layout = ({ toggleDarkTheme }) => (
  <DebugOuterContainer>
    {({ menuSelect, textField }) => (
      <>
        <AppBar actionItems={[
          <SeedTextField {...{ textField }} />,
          <AlgorithmMenuSelect {...{ menuSelect }} />,
          <ThemeButton {...{ toggleDarkTheme }} />
        ]} />
        <DebugImplausible {...{ menuSelect, textField }} />
      </>
    )}
  </DebugOuterContainer>
)

export default Layout
