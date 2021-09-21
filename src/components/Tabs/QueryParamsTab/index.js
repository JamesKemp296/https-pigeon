import React from 'react'

// Material-ui
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

// Components
import QueryParamsInput from './QueryParamsInput'

const useStyles = makeStyles(() => ({
  queryParamsTextField: {
    textTransform: 'capitalize',
  },
}))

const QueryParamsTab = ({ queryParams, setQueryParams }) => {
  const classes = useStyles()
  console.log({ CurrentState: queryParams })

  const handleAddQueryParamClick = () => {
    const newParamPlaceHolder = {
      id: queryParams.length + 1,
      key: '',
      value: '',
    }
    setQueryParams([...queryParams, newParamPlaceHolder])
  }

  const handleUpdateQueryParamClick = (key, value, id) => {
    const paramIndex = queryParams.findIndex((param) => param.id === id)
    const updatedQueryParams = {
      id: id,
      key: key,
      value: value,
    }
    setQueryParams([
      ...queryParams.slice(0, paramIndex),
      updatedQueryParams,
      ...queryParams.slice(paramIndex + 1),
    ])
  }

  const handleDeleteQueryParamClick = (id) => {
    const newParams = [...queryParams]
    const paramIndex = queryParams.findIndex((param) => param.id === id)
    console.log({ toBeDeleted: queryParams[paramIndex] })
    newParams.splice(paramIndex, 1)
    // const data = newParams.filter((param) => param.id !== id)
    // console.log(data)
    setQueryParams(newParams)
  }

  return (
    <>
      {queryParams.map((param, i) => {
        return (
          <QueryParamsInput
            key={i}
            param={param}
            handleDeleteQueryParamClick={handleDeleteQueryParamClick}
            handleUpdateQueryParamClick={handleUpdateQueryParamClick}
          />
        )
      })}
      <Button variant="outlined" onClick={handleAddQueryParamClick}>
        Add
      </Button>
    </>
  )
}

export default QueryParamsTab
