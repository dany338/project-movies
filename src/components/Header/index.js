import React, { useState, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import { categoriesId } from '../../utils/constants'

const categoriesNames = Object.keys(categoriesId)

const StyledToolbar = styled(Toolbar)`
  h6 {
    flex-grow: 1;
  }
`

const StyledSelectField = styled(Select)`
  .MuiInputBase-root {
    color: white;
  }

  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }

  .MuiInputLabel-outlined.MuiInputLabel-marginDense {
    color: white;
  }
`

const Header = (props) => {
  const [default_page, setDefaultPage] = useState(0)
  const [category, setCategory] = useState('')
  const inputLabel = useRef(null)
  const [labelWidth, setLabelWidth] = useState(0)

  const { history } = props
  const handleChange = event => {
    const { value } = event.target
    console.log('handleChange',value)
    setDefaultPage(1)
    setCategory(value)
    setLabelWidth(inputLabel.current.offsetWidth)
    console.log(category)
    history.push(`/category/${value}`)
  }

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6">Movies</Typography>
        <InputLabel ref={inputLabel} htmlFor="outlined-category-simple">
          Category
        </InputLabel>
        <StyledSelectField
          value={category}
          onChange={handleChange}
          input={<OutlinedInput labelWidth={labelWidth} name="category" id="outlined-category-simple" />}
        >
          <MenuItem value="">
            <em>Select Category</em>
          </MenuItem>
          {categoriesNames.map(category => (
            <MenuItem value={category} key={category}>{category}</MenuItem>
          ))}
        </StyledSelectField>
      </StyledToolbar>
    </AppBar>
  )
}

export default withRouter(Header)
