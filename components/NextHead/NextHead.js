import Head from 'next/head'
import React from 'react'
import MaterialStyles from './MaterialStyles'

export default ({
  fontIcons = false,
  metaContent = 'initial-scale=1.0, width=device-width',
  metaName = 'viewport',
  roboto = true,
  title = 'App'
}) => (
  <Head>
    <meta {...{
      content: metaContent,
      name: metaName
    }} />

    <title>{title}</title>

    <MaterialStyles {...{ fontIcons, roboto }} />
  </Head>
)
