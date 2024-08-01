import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

const ChildrenTwo = () => {
    const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', width: '100%' }}>
    {/* <Box sx={{ 
      flex: isSmallScreen ? 'none' : 65, 
      display: 'flex', 
      flexWrap: 'wrap',
      flexDirection:  'row', 
      gap: 1, 
      paddingRight: 2, 
      paddingTop:2,
      width: isSmallScreen ? '100%' : 'auto' 
    }}>
      
    </Box>
    <Box sx={{ 
      flex: isSmallScreen ? 'none' : 35, 
      backgroundColor: '#1f1f26', 
      padding: 2, 
      marginLeft: isSmallScreen ? 0 : 1, 
      width: isSmallScreen ? '100%' : 'auto',
      marginTop: isSmallScreen ? 1 : 0 
    }}>
      <Box sx={{ backgroundColor: '#1f1f26', padding: 1 }}>Right</Box>
    </Box> */}
  </Box>
  )
}

export default ChildrenTwo
