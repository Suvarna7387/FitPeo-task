import React from 'react';
import { Box, useMediaQuery, useTheme, Typography, Button, Menu, MenuItem } from '@mui/material';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const data = [
  { name: '5', value: 3000 },
  { name: '7', value: 2000 },
  { name: '9', value: 1000 },
  { name: '11', value: 1500 },
  { name: '13', value: 2500 },
  { name: '15', value: 3000 },
  { name: '17', value: 4000 },
  { name: '19', value: 6000 },
  { name: '21', value: 15000 },
  { name: '23', value: 5000 },
  { name: '25', value: 8000 },
  { name: '27', value: 3000 },
];

const ChildrenTwo = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', gap: 2, paddingTop: '20px', justifyContent: 'center', alignItems: 'stretch' }}>
      <Box sx={{ backgroundColor: '#1f1f26', padding: '20px', borderRadius: '8px', flex: isSmallScreen ? 'none' : 2.6, minWidth: '300px', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ color: '#fff' }}>Activity</Typography>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            sx={{ color: '#fff' }}
            endIcon={<ExpandMoreIcon />}
          >
            Weekly
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Daily</MenuItem>
            <MenuItem onClick={handleClose}>Weekly</MenuItem>
            <MenuItem onClick={handleClose}>Monthly</MenuItem>
          </Menu>
        </Box>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: isSmallScreen ? 'none' : 1.4, minWidth: '200px', backgroundColor: '#1f1f26', borderRadius: '8px', padding: '10px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#1f1f26', padding: '10px', borderRadius: '8px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AssignmentIcon sx={{ color: 'orange', marginRight: '10px' }} />
            <Typography variant="body1" sx={{ color: '#fff' }}>Goals</Typography>
          </Box>
          <ArrowForwardIosIcon sx={{ color: '#fff' }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#1f1f26', padding: '10px', borderRadius: '8px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FastfoodIcon sx={{ color: 'blue', marginRight: '10px' }} />
            <Typography variant="body1" sx={{ color: '#fff' }}>Popular Dishes</Typography>
          </Box>
          <ArrowForwardIosIcon sx={{ color: '#fff' }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#1f1f26', padding: '10px', borderRadius: '8px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <RestaurantMenuIcon sx={{ color: 'teal', marginRight: '10px' }} />
            <Typography variant="body1" sx={{ color: '#fff' }}>Menus</Typography>
          </Box>
          <ArrowForwardIosIcon sx={{ color: '#fff' }} />
        </Box>
      </Box>
    </Box>
  );
}

export default ChildrenTwo;
