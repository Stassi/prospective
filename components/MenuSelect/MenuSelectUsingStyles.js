import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuSelectUsingState from './MenuSelectUsingMenuSelect'

const useStyles = makeStyles(({ spacing }) => ({
  formControl: {
    margin: spacing(1),
    minWidth: 120
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  selectEmpty: {
    marginTop: spacing(2)
  }
}))

const MenuSelectUsingStyles = props => (
  <MenuSelectUsingState {...{
    ...props,
    classes: useStyles()
  }} />
)

export default MenuSelectUsingStyles
