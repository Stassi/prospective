import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const propTypes = { classes: PropTypes.object.isRequired }

const HigherOrderComponent = ({ classes: { root } }) => (
  <Button className={root}>
    Higher-order component
  </Button>
)

HigherOrderComponent.propTypes = propTypes

export default HigherOrderComponent
