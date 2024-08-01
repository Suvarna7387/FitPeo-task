import React, { useState } from 'react';
import { CssBaseline, useMediaQuery, useTheme, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const theme = useTheme();
  const isPermanent = useMediaQuery(theme.breakpoints.up('md'));

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <CssBaseline />
      <Navbar toggleSidebar={toggleSidebar} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} permanent={isPermanent} />
        <Box component="main" sx={{ flexGrow: 1,  marginTop: '64px', marginLeft: isPermanent ? '0' : 0 }}>
          <MainPage />
        </Box>
      </Box>
    </>
  );
};

export default App;
