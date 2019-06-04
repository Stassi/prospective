import React from 'react'
import DemoLayout from '../components/Demo/DemoLayout'
import Link from '../components/Link'

const Demo = () => (
  <DemoLayout>
    <Link
      color='secondary'
      href='/about'
    >
      Go to the about page
    </Link>
  </DemoLayout>
)

export default Demo
