import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import SimpleCard from '../SimpleCard'

const propTypes = {
  classes: PropTypes.object.isRequired
}

const CenteredGrid = ({ classes: { root } }) => (
  <div className={root}>
    <Grid container spacing={24}>
      <Grid item xs={4}>
        <SimpleCard />
      </Grid>
      <Grid item xs={4}>
        <SimpleCard />
      </Grid>
      <Grid item xs={4}>
        <SimpleCard />
      </Grid>
      <Grid item xs={4}>
        <SimpleCard />
      </Grid>
      <Grid item xs={4}>
        <SimpleCard />
      </Grid>
      <Grid item xs={4}>
        <SimpleCard />
      </Grid>
    </Grid>
  </div>
)

CenteredGrid.propTypes = propTypes

export default CenteredGrid
