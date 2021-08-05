import React, { useState } from 'react'

// Material-ui
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles(() => ({
  root: {
    // flexGrow: 1,
  },
  cardRoot: {
    width: '100%',
  },
  tab: {},
  tabPanel: {},
  queryParamsTextField: {
    textTransform: 'capitalize',
  },
}))

function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}

const INITIAL_QUERY_PARAMS = [{ key: '', value: '' }]

export default function BasicTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [queryParams, setQueryParams] = useState(INITIAL_QUERY_PARAMS)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card className={classes.cardRoot} elevation={0}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Query Params" {...a11yProps(0)} className={classes.tab} />
          <Tab label="Headers" {...a11yProps(1)} className={classes.tab} />
          <Tab label="JSON" {...a11yProps(2)} className={classes.tab} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box display="flex" mb={2}>
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
          <Button variant="outlined">Remove</Button>
        </Box>
        <Button variant="outlined">Add</Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Card>
  )
}
