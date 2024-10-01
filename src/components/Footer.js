// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'primary.main', color: 'white', p: 2, position: 'fixed', bottom: 0, textAlign: 'center' }}>
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Butik Adı. Tüm Hakları Saklıdır.
      </Typography>
      <Typography variant="body2">
        İletişim: info@butik.com | Telefon: +90 555 555 55 55
      </Typography>
    </Box>
  );
}

export default Footer;
