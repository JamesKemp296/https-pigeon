import React from 'react'

// Material-ui
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(() => ({
  queryParamsTextField: {
    textTransform: 'capitalize',
  },
}))

const QueryParamsTab = ({ queryParams, setQueryParams }) => {
  const classes = useStyles()

  const handleAddQueryParamClick = () => {
    const newParamPlaceHolder = {
      id: queryParams.length + 1,
      key: '',
      value: '',
    }
    setQueryParams([...queryParams, newParamPlaceHolder])
  }

  const handleDeleteQueryParamClick = ({ id }) => {
    const data = queryParams.filter((x) => x.id !== id)
    setQueryParams([...data])
  }

  const queryParamsInput = (param, i) => {
    return (
      <Box display="flex" mb={2} justifyContent="space-between">
        <TextField
          label="Key"
          variant="outlined"
          className={classes.queryParamsTextField}
        />
        <TextField
          label="Value"
          variant="outlined"
          className={classes.queryParamsTextField}
        />
        <Button
          variant="outlined"
          onClick={() => handleDeleteQueryParamClick(param)}
        >
          Remove
        </Button>
      </Box>
    )
  }

  return (
    <>
      {queryParams.length
        ? queryParams.map((param, i) => queryParamsInput(param, i))
        : null}
      <Button variant="outlined" onClick={handleAddQueryParamClick}>
        Add
      </Button>
    </>
  )
}

export default QueryParamsTab
