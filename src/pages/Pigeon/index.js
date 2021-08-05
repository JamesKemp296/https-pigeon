import React from 'react'

// Material-ui
import { makeStyles } from '@material-ui/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'

// components
import Tabs from '../../components/Tabs'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: '0px 256px',
  },
  cardRoot: {
    marginBottom: 24,
  },
  selectArea: {
    padding: 16,
  },
  addressTextField: {
    flexGrow: 1,
  },
  sendButton: {
    textTransform: 'capitalize',
  },
}))

function Pigeon() {
  const classes = useStyles()
  const [select, setSelect] = React.useState('GET')

  const handleChange = (event) => {
    setSelect(event.target.value)
  }
  return (
    <FormControl className={classes.root}>
      <Card elevation={0} className={classes.cardRoot}>
        <Box display="flex" className={classes.selectArea}>
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
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            className={classes.addressTextField}
          />
          <Button variant="outlined" className={classes.sendButton}>
            SEND
          </Button>
        </Box>
      </Card>
      <Tabs />
    </FormControl>
  )
}

export default Pigeon
