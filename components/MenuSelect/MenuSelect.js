import React from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

const propTypes = { classes: PropTypes.object.isRequired }

const MenuSelect = ({
  labelID,
  labelName,
  labelPlaceholder,
  menuItems,
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
        {labelName}
      </InputLabel>

      <Select
        className={selectEmpty}
        displayEmpty
        input={(
          <Input
            id={labelPlaceholder}
            name={labelID}
          />
        )}
        name={labelID}
        onChange={setSelected}
        value={selected}
      >
        {menuItems.map(({ label, value }) => (
          <MenuItem {...{ value }}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </form>
)

MenuSelect.propTypes = propTypes

export default MenuSelect
