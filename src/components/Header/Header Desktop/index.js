import * as React from 'react'
import { Link } from 'react-router-dom'

// Material-ui
import { makeStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'

// Material-ui Icons
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    color: 'black',
  },
  headerTitle: {
    fontWeight: 400,
    color: 'black',
    fontSize: 20,
  },
  headerButton: {
    fontSize: '16px',
    textTransform: 'capitalize',
  },
}))

function HeaderDesktop() {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.root} elevation={0}>
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button to="/" component={Link} className={classes.headerTitle}>
              HTTPS <strong>PIGEON</strong>
            </Button>
          </Typography>
          <Button color="inherit" className={classes.headerButton}>
            Start
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default HeaderDesktop
