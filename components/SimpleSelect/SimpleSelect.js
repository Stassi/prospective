import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

const propTypes = { classes: PropTypes.object.isRequired }

class SimpleSelect extends Component {
  state = { age: '' };

  handleChange = ({
    target: {
      name,
      value
    }
  }) => {
    this.setState({ [name]: value })
  };

  render () {
    const {
      classes: {
        formControl,
        root,
        selectEmpty
      }
    } = this.props

    const { age } = this.state

    return (
      <form
        autoComplete='off'
        className={root}
      >
        <FormControl className={formControl}>
          <InputLabel
            htmlFor='age-label-placeholder'
            shrink
          >
            Age
          </InputLabel>

          <Select
            className={selectEmpty}
            displayEmpty
            input={(
              <Input
                id='age-label-placeholder'
                name='age'
              />
            )}
            name='age'
            onChange={this.handleChange}
            value={age}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </form>
    )
  }
}

SimpleSelect.propTypes = propTypes

export default SimpleSelect
