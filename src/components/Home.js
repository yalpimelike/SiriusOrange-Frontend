// src/components/Home.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function Home() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Butiğimize Hoşgeldiniz!
      </Typography>
      <Typography variant="body1">
        Butiğimizde en kaliteli ve özgün ürünleri bulabilirsiniz. Herkesin tarzına uygun harika seçenekler sunuyoruz.
      </Typography>
    </Box>
  );
}

export default Home;
