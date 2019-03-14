import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const propTypes = {
  classes: PropTypes.object.isRequired
}

const StyleDemo = ({ classes: { root } }) => (
  <Button className={root}>
    Demo
  </Button>
)

StyleDemo.propTypes = propTypes

export default StyleDemo
