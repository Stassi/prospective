import React from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import menuItems from './menuItems'

const propTypes = { classes: PropTypes.object.isRequired }

const MenuSelect = ({
  label,
  labelPlaceholder,
  options,
  selected,
  value,
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
        {menuItems(options)}
      </Select>
    </FormControl>
  </form>
)

MenuSelect.propTypes = propTypes

export default MenuSelect
