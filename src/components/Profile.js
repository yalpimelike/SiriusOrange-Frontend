// src/components/Profile.js
import React from 'react';
import { Box, Typography, Avatar, Stack } from '@mui/material';

function Profile() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Profil Bilgileriniz
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar sx={{ bgcolor: 'deepPurple[500]' }}>U</Avatar>
        <Box>
          <Typography variant="h6">Kullanıcı Adı: Ahmet Yılmaz</Typography>
          <Typography variant="body1">E-posta: ahmet@example.com</Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default Profile;
