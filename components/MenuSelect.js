import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import enhance from '../src/menuSelect'

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

const EnhancedMenuSelect = enhance(MenuSelect)

export default EnhancedMenuSelect
