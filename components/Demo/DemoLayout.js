import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import MadeWithLove from './MadeWithLove'
import ProTip from './ProTip'

const DemoLayout = ({ children }) => (
  <Container maxWidth='sm'>
    <Box my={4}>
      <Typography
        component='h1'
        gutterBottom
        variant='h4'
      >
        Next.js v4-beta example
      </Typography>
      {children}
      <ProTip />
      <MadeWithLove />
    </Box>
  </Container>
)

export default DemoLayout
