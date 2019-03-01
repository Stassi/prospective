import Head from 'next/head'
import React from 'react'
import MaterialStyles from './MaterialStyles'
import MaterialViewport from './MaterialViewport'

export default ({
  fontIcons = false,
  responsive = true,
  roboto = true,
  title = 'App'
}) => (
  <Head>
    <MaterialViewport {...{ responsive }} />

    <title>{title}</title>

    <MaterialStyles {...{ fontIcons, roboto }} />
  </Head>
)
