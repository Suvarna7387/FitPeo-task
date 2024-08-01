import React, { useState } from 'react';
import { CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
// import ChildComponent1 from './ChildComponent1';
// import other child components as needed

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
    <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} permanent={isPermanent} />
    <MainPage>
      {/* <ChildComponent1 /> */}
      {/* Add other child components here */}
    </MainPage>
  </>
  );
};

export default App;
