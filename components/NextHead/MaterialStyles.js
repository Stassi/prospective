import React from 'react'

export default ({ fontIcons, roboto }) => [
  fontIcons && (
    <link
      href='https://fonts.googleapis.com/icon?family=Material+Icons'
      key='fontIcons'
      rel='stylesheet'
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
