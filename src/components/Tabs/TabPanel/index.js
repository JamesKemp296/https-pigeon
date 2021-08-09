import React from 'react'

// Material-ui
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(() => ({
  root: {
    // flexGrow: 1,
  },
}))

export default function TabPanel(props) {
  const classes = useStyles()
  const { children, value, index, ...other } = props

  return (
    <div
      className={classes.root}
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
