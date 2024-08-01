import React from 'react';
import { Box } from '@mui/material';

const MainPage = ({ children }) => (
  <Box sx={{ backgroundColor: '#141416', minHeight: '100vh', padding: 2 }}>
    {children}
  </Box>
);

export default MainPage;
