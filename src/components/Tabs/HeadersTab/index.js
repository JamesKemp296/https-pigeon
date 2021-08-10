import React from 'react'

// Material-ui
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(() => ({
  headersTextField: {
    textTransform: 'capitalize',
  },
}))

const HeadersTab = ({ headers, setHeaders }) => {
  const classes = useStyles()

  const handleAddHeadersClick = () => {
    const newHeader = {
      id: headers.length + 1,
      key: '',
      value: '',
    }
    setHeaders([...headers, newHeader])
  }

  const handleDeleteHeadersClick = ({ id }) => {
    const data = headers.filter((x) => x.id !== id)
    setHeaders([...data])
  }

  const headersInput = (header, i) => {
    return (
      <Box display="flex" mb={2} justifyContent="space-between">
        <TextField
          label="Key"
          variant="outlined"
          className={classes.headersTextField}
        />
        <TextField
          label="Value"
          variant="outlined"
          className={classes.headersTextField}
        />
        <Button
          variant="outlined"
          onClick={() => handleDeleteHeadersClick(header)}
        >
          Remove
        </Button>
      </Box>
    )
  }

  return (
    <>
      {headers.length
        ? headers.map((param, i) => headersInput(param, i))
        : null}
      <Button variant="outlined" onClick={handleAddHeadersClick}>
        Add
      </Button>
    </>
  )
}

export default HeadersTab
