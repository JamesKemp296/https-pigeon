import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

function Pigeon() {
  const [select, setSelect] = React.useState('GET')

  const handleChange = (event) => {
    setSelect(event.target.value)
  }
  return (
    <FormControl>
      <Box display="flex">
        <Select
          labelId="select-label"
          id="select"
          value={select}
          label="Select"
          onChange={handleChange}
        >
          <MenuItem value={'GET'}>GET</MenuItem>
          <MenuItem value={'POST'}>POST</MenuItem>
          <MenuItem value={'PUT'}>PUT</MenuItem>
          <MenuItem value={'PATCH'}>PATCH</MenuItem>
          <MenuItem value={'DELETE'}>DELETE</MenuItem>
        </Select>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained">SEND</Button>
      </Box>
    </FormControl>
  )
}

export default Pigeon
