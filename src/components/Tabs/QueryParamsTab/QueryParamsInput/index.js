import React, { useState } from 'react'

// Material-ui
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import SendIcon from '@material-ui/icons/Send'
import Stack from '@material-ui/core/Stack'

const useStyles = makeStyles(() => ({
  queryParamsTextField: {
    textTransform: 'capitalize',
  },
  buttonStyle: {
    height: 56,
    paddingTop: 5,
    paddingBottom: 5,
  },
  typographyKeyPair: {
    width: '50%',
    paddingLeft: 14,
  },
}))

const QueryParamsInput = ({
  param,
  handleDeleteQueryParamClick,
  handleUpdateQueryParamClick,
}) => {
  const classes = useStyles()
  console.log(param)

  const [isEdit, setIsEdit] = useState(true)
  const [formData, setFormData] = useState({
    key: param.key,
    value: param.value,
  })
  const { key, value } = formData

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleUpdateParam = () => {
    setIsEdit(false)
    handleUpdateQueryParamClick(key, value, param.id)
  }

  return (
    <Box display="flex" mb={2} justifyContent="space-between">
      {isEdit ? (
        <>
          <TextField
            label="Key"
            variant="outlined"
            className={classes.queryParamsTextField}
            name="key"
            onChange={handleInputChange}
            value={key}
          />
          <TextField
            label="Value"
            variant="outlined"
            className={classes.queryParamsTextField}
            name="value"
            onChange={handleInputChange}
            value={value}
          />
        </>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Typography className={classes.typographyKeyPair}>{key}</Typography>
          <Typography className={classes.typographyKeyPair}>{value}</Typography>
        </Box>
      )}
      <Stack direction="row" spacing={2}>
        {isEdit ? (
          <Button
            variant="outlined"
            endIcon={<SendIcon />}
            onClick={handleUpdateParam}
            className={classes.buttonStyle}
            disabled={!key || !value}
          >
            Done
          </Button>
        ) : (
          <Button
            variant="outlined"
            endIcon={<EditIcon />}
            onClick={() => setIsEdit(true)}
            className={classes.buttonStyle}
          >
            Edit
          </Button>
        )}
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => handleDeleteQueryParamClick(param.id)}
          className={classes.buttonStyle}
        >
          Delete
        </Button>
      </Stack>
    </Box>
  )
}

export default QueryParamsInput
