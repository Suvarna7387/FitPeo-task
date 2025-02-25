import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar } from '@mui/material';
import { Mail, Notifications, Settings, Menu } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar = ({ toggleSidebar }) => (
  <AppBar position="fixed" sx={{ backgroundColor: '#1f1f26' }}>
    <Toolbar>
      <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
        <Menu />
      </IconButton>
      <div style={{ marginLeft: '30px' }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>
      </div>
      <div style={{ flexGrow: 1 }} />
      <IconButton color="inherit">
        <Badge  color="secondary">
          <Mail />
        </Badge>
      </IconButton>
      <IconButton color="inherit">
        <Settings />
      </IconButton>
      <IconButton color="inherit">
        <Badge  color="secondary">
          <Notifications />
        </Badge>
      </IconButton>
      <Avatar alt="Profile Picture" src="/static/images/avatar/1.jpg" />
    </Toolbar>
  </AppBar>
);

export default Navbar;
