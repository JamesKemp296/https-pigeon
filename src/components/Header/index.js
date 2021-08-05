import React from 'react'
import HeaderDesktop from './Header Desktop'

// Material-ui
import Box from '@material-ui/core/Box'

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeaderDesktop />
    </Box>
  )
}

export default Header
