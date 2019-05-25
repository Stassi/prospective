import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '../components/Link'
import MadeWithLove from '../components/MadeWithLove'
import ProTip from '../components/ProTip'

const Index = () => (
  <Container maxWidth='sm'>
    <Box my={4}>
      <Typography
        component='h1'
        gutterBottom
        variant='h4'
      >
        Next.js v4-beta example
      </Typography>
      <Link
        color='secondary'
        href='/about'
      >
        Go to the about page
      </Link>
      <ProTip />
      <MadeWithLove />
    </Box>
  </Container>
)

export default Index
