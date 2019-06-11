import React from 'react'
import TextField from '@material-ui/core/TextField'
import { searchField as enhance } from '../src/enhancers'

const SearchField = ({
  classes: {
    container,
    textField
  }
}) => (
  <form
    autoComplete='off'
    className={container}
    noValidate
  >
    <TextField
      className={textField}
      id='standard-search'
      label='Search field'
      margin='normal'
      type='search'
    />
  </form>
)

const EnhancedSearchField = enhance(SearchField)

export default EnhancedSearchField
