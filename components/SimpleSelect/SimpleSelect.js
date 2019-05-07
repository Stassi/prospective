import React from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

const propTypes = { classes: PropTypes.object.isRequired }

const label = 'age'
const labelPlaceholder = `${label}-label-placeholder`

const SimpleSelect = ({
  selected,
  actions: { setSelected },
  classes: {
    formControl,
    root,
    selectEmpty
  }
}) => (
  <form
    autoComplete='off'
    className={root}
  >
    <FormControl className={formControl}>
      <InputLabel
        htmlFor={labelPlaceholder}
        shrink
      >
        Age
      </InputLabel>

      <Select
        className={selectEmpty}
        displayEmpty
        input={(
          <Input
            id={labelPlaceholder}
            name={label}
          />
        )}
        name={label}
        onChange={setSelected}
        value={selected}
      >
        <MenuItem value=''>None</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </form>
)

SimpleSelect.propTypes = propTypes

export default SimpleSelect
