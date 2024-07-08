import { Box, Typography } from '@mui/material';
import React from 'react';

const MediaComponent = ({ title }) => {
  return (
    <>
      <Box sx={{ p: 5, borderBottom: '1px solid #E4E4E4' }}>
        <Typography
          sx={{ fontSize: { xs: '15px', sm: '20px' }, fontWeight: 500 }}
        >
          {title}
        </Typography>
        <Box></Box>
      </Box>
    </>
  );
};

export default MediaComponent;
