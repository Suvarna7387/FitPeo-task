import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Home } from '@mui/icons-material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import LogoImg from "../Images/Logo.png";

const Sidebar = ({ open, toggleSidebar, permanent }) => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <Drawer
      variant={permanent ? 'permanent' : 'temporary'}
      open={open}
      onClose={toggleSidebar}
      sx={{
        width: permanent ? 73 : 'auto',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 73,
          boxSizing: 'border-box',
          backgroundColor: '#1f1f26',
          color: '#fff',
        },
      }}
    >
      <List>
        <Box sx={{ textAlign: 'center', margin: '10px 0' }}>
          <img style={{ height: "40px", width: "40px" }} src={LogoImg} alt="Logo" />
        </Box>
        <ListItem button onClick={() => handleItemClick('Home')} sx={{ backgroundColor: activeItem === 'Home' ? 'rgba(0, 122, 255, 0.1)' : 'transparent' }}>
          <Box sx={{ width: 4, backgroundColor: activeItem === 'Home' ? 'blue' : 'transparent', marginRight: 2 }} />
          <ListItemIcon sx={{ color: activeItem === 'Home' ? 'blue' : '#fff' }}><Home /></ListItemIcon>
        </ListItem>
        <ListItem button onClick={() => handleItemClick('Assessment')}>
          <Box sx={{ width: 4, backgroundColor: activeItem === 'Assessment' ? 'blue' : 'transparent', marginRight: 2 }} />
          <ListItemIcon sx={{ color: activeItem === 'Assessment' ? 'blue' : '#fff' }}><AssessmentIcon /></ListItemIcon>
        </ListItem>
        <ListItem button onClick={() => handleItemClick('Assignment')}>
          <Box sx={{ width: 4, backgroundColor: activeItem === 'Assignment' ? 'blue' : 'transparent', marginRight: 2 }} />
          <ListItemIcon sx={{ color: activeItem === 'Assignment' ? 'blue' : '#fff' }}><AssignmentTurnedInIcon /></ListItemIcon>
        </ListItem>
        <ListItem button onClick={() => handleItemClick('Wallet')}>
          <Box sx={{ width: 4, backgroundColor: activeItem === 'Wallet' ? 'blue' : 'transparent', marginRight: 2 }} />
          <ListItemIcon sx={{ color: activeItem === 'Wallet' ? 'blue' : '#fff' }}><AccountBalanceWalletIcon /></ListItemIcon>
        </ListItem>
        <ListItem button onClick={() => handleItemClick('Encryption')}>
          <Box sx={{ width: 4, backgroundColor: activeItem === 'Encryption' ? 'blue' : 'transparent', marginRight: 2 }} />
          <ListItemIcon sx={{ color: activeItem === 'Encryption' ? 'blue' : '#fff' }}><EnhancedEncryptionIcon /></ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
