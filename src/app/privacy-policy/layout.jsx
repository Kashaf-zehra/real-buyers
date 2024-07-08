import React from 'react';
import { Box } from '@mui/material';

const InnerPageLayout = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: '#F4F5F7', border: '1px solid #F4F5F7' }}>
      <Box maxWidth={1200} mx={'auto'}>
        {children}
      </Box>
    </Box>
  );
};

export default InnerPageLayout;
