import CssBaseline from '@material-ui/core/CssBaseline'
import Head from 'next/head'
import React from 'react'
import MaterialStyles from './MaterialStyles'

export default ({
  baseline = true,
  fontIcons = false,
  responsive = true,
  roboto = true,
  title = 'App'
}) => [
  <Head key='head'>
    <title>{title}</title>

    <MaterialStyles {...{
      baseline,
      fontIcons,
      responsive,
      roboto
    }} />
  </Head>,
  baseline && <CssBaseline key='baseline' />
]
