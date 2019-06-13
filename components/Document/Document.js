import React from 'react'
import NextDocument from 'next/document'
import PureDocument from './PureDocument'
import { document as enhance } from '../../src/enhancers'

class Document extends NextDocument {
  render () {
    return <PureDocument {...this.props} />
  }
}

const EnhancedDocument = enhance(Document)

export default EnhancedDocument
