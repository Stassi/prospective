import Head from 'next/head'
import React from 'react'
import MaterialStyles from './MaterialStyles'

export default ({
  fontIcons = false,
  responsive = true,
  roboto = true,
  title = 'App'
}) => (
  <Head>
    <title>{title}</title>

    <MaterialStyles {...{
      fontIcons,
      responsive,
      roboto
    }} />
  </Head>
)
