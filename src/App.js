import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

// components
import View from './components/view'
import Header from './components/Header'

// Pages
import Pigeon from './pages/Pigeon'
import About from './pages/About'
import Home from './pages/Home'

const theme = createTheme({
  status: {
    danger: 'orange', // placeholder
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <View>
          <Switch>
            <Route path="/pigeon">
              <Pigeon />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </View>
      </Router>
    </ThemeProvider>
  )
}

export default App
