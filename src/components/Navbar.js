// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; 

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate('/');
    } else if (newValue === 1) {
      navigate('/products');
    } else if (newValue === 2) {
      navigate('/profile');
    }
  };

  return (
    <AppBar position="static" sx={{ height: '150px', background : 'white' }}>
      <Toolbar sx={{ height: '100%' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Sirius Orange
        </Typography>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Ana Sayfa" />
          <Tab label="Ürünler" />
          <Tab label="Profil" />
        </Tabs>
        <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          <img src={logo} alt="Logo" style={{height: '60px', cursor: 'pointer' }} />
        </Box>

       
    
      </Toolbar>
    </AppBar>
  );
}
