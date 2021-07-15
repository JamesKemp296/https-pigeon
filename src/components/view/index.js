import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
  },
})

function View({ children }) {
  const classes = useStyles()
  return <Box className={classes.root}>{children}</Box>
}

export default View
