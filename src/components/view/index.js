import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
  },
})

function View({ children }) {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="center"
        mt={20}
        className={classes.root}
      >
        {children}
      </Box>
    </Container>
  )
}

export default View
