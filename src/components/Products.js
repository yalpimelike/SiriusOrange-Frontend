// src/components/Products.js
import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const products = [
  { id: 1, name: 'Elbise', price: '100 TL' },
  { id: 2, name: 'Ayakkabı', price: '150 TL' },
  { id: 3, name: 'Çanta', price: '200 TL' },
];

function Products() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Ürünlerimiz
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body1">{product.price}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Products;
