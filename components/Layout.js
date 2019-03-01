import React from 'react'
import Button from '@material-ui/core/Button'
import NextHead from './NextHead'

const Layout = () => (
  <>
    <NextHead />
    <Button
      color='primary'
      variant='contained'
    >
      Hello World
    </Button>
  </>
)

export default Layout
