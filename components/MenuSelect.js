import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { menuSelect as enhance } from '../src/enhancers'

const MenuSelect = ({
  label,
  labelPlaceholder,
  options,
  value,
  classes: {
    formControl,
    selectEmpty
  },
  menuSelect: {
    selected,
    setSelected
  }
}) => (
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
)

const EnhancedMenuSelect = enhance(MenuSelect)

export default EnhancedMenuSelect
