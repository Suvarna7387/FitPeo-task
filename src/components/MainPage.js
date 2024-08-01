import React from 'react';
import { Box } from '@mui/material';
import ChildrenOne from './ChildrenOne';
import ChildrenTwo from './ChildrenTwo';
import ChildrenThree from './ChildrenThree';

const MainPage = ({ children }) => (
  <Box sx={{ backgroundColor: '#141416', padding: 2, color: 'white' }}>
    <div>Dashboard</div>
    <ChildrenOne />
    <ChildrenTwo />
    <ChildrenThree />
  </Box>
);

export default MainPage;
