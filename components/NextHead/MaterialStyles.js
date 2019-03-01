import React from 'react'

export default ({
  fontIcons,
  responsive,
  roboto
}) => [
  fontIcons && (
    <link
      href='https://fonts.googleapis.com/icon?family=Material+Icons'
      key='fontIcons'
      rel='stylesheet'
    />
  ),
  responsive && (
    <meta
      content='initial-scale=1, minimum-scale=1, shrink-to-fit=no, width=device-width'
      key='responsive'
      name='viewport'
    />
  ),
  roboto && (
    <link
      href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
      key='roboto'
      rel='stylesheet'
    />
  )
]
