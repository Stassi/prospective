import React from 'react'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import LightBulbIcon from '../LightBulbIcon'

const ProTip = ({
  classes: {
    lightBulb,
    root
  }
}) => (
  <Typography
    className={root}
    color='textSecondary'
  >
    <LightBulbIcon className={lightBulb} />
    Pro tip: See more
    {' '}
    <Link href='https://material-ui.com/getting-started/page-layout-examples/'>
      page layout examples
    </Link>
    {' '}
    on the Material-UI documentation.
  </Typography>
)

export default ProTip
