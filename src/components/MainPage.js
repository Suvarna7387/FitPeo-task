import React from 'react';
import { Box } from '@mui/material';
import ChildrenOne from './ChildrenOne';
import ChildrenTwo from './ChildrenTwo';
import CustomerFeedback  from './CustomerFeedback ';

const MainPage = ({ children }) => (
  <Box sx={{ backgroundColor: '#141416', padding: 2, color: 'white' }}>
    <div style={{fontWeight:"600", fontSize:"20px"}}>Dashboard</div>
    <ChildrenOne />
    <ChildrenTwo />
    <CustomerFeedback  />
  </Box>
);

export default MainPage;
