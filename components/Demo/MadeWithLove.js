import React from 'react'
import MuiLink from '@material-ui/core/Link/Link'
import Typography from '@material-ui/core/Typography'

const MadeWithLove = () => (
  <Typography
    align='center'
    color='textSecondary'
    variant='body2'
  >
    {'Built with love by the '}
    <MuiLink
      color='inherit'
      href='https://material-ui.com/'
    >
      Material-UI
    </MuiLink>
    {' team.'}
  </Typography>
)

export default MadeWithLove
