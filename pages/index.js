import React from 'react'
import DemoLayout from '../components/DemoLayout'
import Link from '../components/Link'

const Index = () => (
  <DemoLayout>
    <Link
      color='secondary'
      href='/about'
    >
      Go to the about page
    </Link>
  </DemoLayout>
)

export default Index
