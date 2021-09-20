import React, { useState } from 'react'

// Components
import QueryParamsTab from './QueryParamsTab'
import TabPanel from './TabPanel'
import HeadersTab from './HeadersTab'

// Material-ui
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
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

const INITIAL_QUERY_PARAMS = [{ id: 1, key: '', value: '' }]
const INITIAL_HEADERS = [{ id: 1, key: '', value: '' }]

export default function BasicTabs() {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [queryParams, setQueryParams] = useState(INITIAL_QUERY_PARAMS)
  const [headers, setHeaders] = useState(INITIAL_HEADERS)

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
        <QueryParamsTab
          queryParams={queryParams}
          setQueryParams={setQueryParams}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HeadersTab headers={headers} setHeaders={setHeaders} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Card>
  )
}
