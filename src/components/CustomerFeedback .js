import React from 'react';
import { Box, Typography, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered', avatar: 'https://via.placeholder.com/40' },
  { customer: 'Jane Cooper', orderNo: '48965786', amount: '$365.02', status: 'Delivered', avatar: 'https://via.placeholder.com/40' },
  { customer: 'Guy Hawkins', orderNo: '78958215', amount: '$45.88', status: 'Cancelled', avatar: 'https://via.placeholder.com/40' },
  { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending', avatar: 'https://via.placeholder.com/40' },
  { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered', avatar: 'https://via.placeholder.com/40' },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered', avatar: 'https://via.placeholder.com/40' },
];

const feedback = [
  { name: 'Jenny Wilson', comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.', rating: 5, avatar: 'https://via.placeholder.com/40' },
  { name: 'Dianne Russell', comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.', rating: 5, avatar: 'https://via.placeholder.com/40' },
  { name: 'Devon Lane', comment: 'Normally wings are wings, but theirs are lean meaty and tender.', rating: 5, avatar: 'https://via.placeholder.com/40' },
];

const StatusChip = styled(Box)(({ theme, status }) => ({
  backgroundColor: status === 'Delivered' ? 'green' : status === 'Cancelled' ? 'red' : 'orange',
  color: '#fff',
  padding: '5px 10px',
  borderRadius: '12px',
  display: 'inline-block',
  textAlign: 'center',
}));

const CustomerFeedback = () => {
  return feedback.map((item, index) => (
    <Box key={index} sx={{ display: 'flex', flexDirection: 'column', marginBottom: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={item.avatar} />
        <Box sx={{ marginLeft: 2 }}>
          <Typography sx={{ color: '#fff' }}>{item.name}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {[...Array(item.rating)].map((_, i) => (
              <Typography key={i} sx={{ color: 'gold' }}>⭐</Typography>
            ))}
          </Box>
        </Box>
      </Box>
      <Typography sx={{ color: '#ccc', marginTop: 1 }}>{item.comment}</Typography>
    </Box>
  ));
};

const RecentOrders = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', gap: 2, padding: '20px', backgroundColor: '#000', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ backgroundColor: '#1f1f26', padding: '20px', borderRadius: '8px', flex: 2, minWidth: '300px' }}>
        <Typography variant="h6" sx={{ color: '#fff', marginBottom: 2 }}>Recent Orders</Typography>
        <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#fff' }}>Customer</TableCell>
                <TableCell sx={{ color: '#fff' }}>Order No.</TableCell>
                <TableCell sx={{ color: '#fff' }}>Amount</TableCell>
                <TableCell sx={{ color: '#fff' }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={order.avatar} />
                      <Typography sx={{ marginLeft: 2, color: '#fff' }}>{order.customer}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: '#fff' }}>{order.orderNo}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{order.amount}</TableCell>
                  <TableCell>
                    <StatusChip status={order.status}>{order.status}</StatusChip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ backgroundColor: '#1f1f26', padding: '20px', borderRadius: '8px', flex: 1, minWidth: '300px' }}>
        <Typography variant="h6" sx={{ color: '#fff', marginBottom: 2 }}>Customer's Feedback</Typography>
        <CustomerFeedback />
      </Box>
    </Box>
  );
};

export default RecentOrders;
