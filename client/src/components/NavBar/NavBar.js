import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar';


const NavBar=()=> {
    
    return (
        <AppBar position="static">
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
          <Typography variant="h6" align="center" sx={{ flexGrow: 1 }}>
            TUT BUS SERVICE
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default NavBar
