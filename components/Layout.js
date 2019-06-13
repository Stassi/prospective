import React from 'react'
import Grid from '@material-ui/core/Grid'
import AlgorithmMenuSelect from './AlgorithmMenuSelect'
import AppBar from './AppBar'
import DebugOuterContainer from './DebugOuterContainer'
import SeedTextField from './SeedTextField'
import ThemeButton from './ThemeButton'

const Layout = ({ toggleDarkTheme }) => (
  <DebugOuterContainer>
    {({ menuSelect, textField }) => (
      <AppBar>
        <form
          autoComplete='off'
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item>
              <SeedTextField {...{ textField }} />
            </Grid>
            <Grid item>
              <AlgorithmMenuSelect {...{ menuSelect }} />
            </Grid>
            <Grid item>
              <ThemeButton {...{ toggleDarkTheme }} />
            </Grid>
          </Grid>
        </form>
      </AppBar>
    )}
  </DebugOuterContainer>
)

export default Layout
