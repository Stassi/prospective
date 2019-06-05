import React from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const propTypes = {
  classes: PropTypes.shape({
    formControl: PropTypes.string.isRequired,
    root: PropTypes.string.isRequired,
    selectEmpty: PropTypes.string.isRequired
  }).isRequired,
  label: PropTypes.string.isRequired,
  labelPlaceholder: PropTypes.string.isRequired,
  menuSelect: PropTypes.shape({
    selected: PropTypes.string.isRequired,
    setSelected: PropTypes.func.isRequired
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired).isRequired,
  value: PropTypes.string.isRequired
}

const MenuSelect = ({
  label,
  labelPlaceholder,
  options,
  value,
  classes: {
    formControl,
    root,
    selectEmpty
  },
  menuSelect: {
    selected,
    setSelected
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
        {label}
      </InputLabel>

      <Select
        className={selectEmpty}
        displayEmpty
        input={(
          <Input
            id={labelPlaceholder}
            name={value}
          />
        )}
        name={value}
        onChange={setSelected}
        value={selected}
      >
        {options.map(({
          label: optionLabel,
          value: optionValue
        }) => (
          <MenuItem
            key={optionValue}
            value={optionValue}
          >
            {optionLabel}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </form>
)

MenuSelect.propTypes = propTypes

export default MenuSelect
