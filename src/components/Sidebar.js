import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, OtherHouses, Settings } from '@mui/icons-material';

const Sidebar = ({ open, toggleSidebar, permanent }) => (
  <Drawer
    variant={permanent ? 'permanent' : 'temporary'}
    open={open}
    onClose={toggleSidebar}
    sx={{
      width: permanent ? 240 : 'auto',
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
      },
    }}
  >
    <List>
      <ListItem button>
        <ListItemIcon><Home /></ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><OtherHouses /></ListItemIcon>
        <ListItemText primary="Option 1" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><OtherHouses /></ListItemIcon>
        <ListItemText primary="Option 2" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><OtherHouses /></ListItemIcon>
        <ListItemText primary="Option 3" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><OtherHouses /></ListItemIcon>
        <ListItemText primary="Option 4" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><Settings /></ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
