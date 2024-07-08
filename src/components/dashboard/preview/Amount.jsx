'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';

const Amount = () => {
  return (
    <Box
      sx={{
        p: 5,
        borderBottom: '1px solid #E4E4E4',
        '@media(min-width:280px) and (max-width:400px)': { px: 3 },
      }}
    >
      <Typography sx={{ fontSize: { xs: '20px' }, fontWeight: 500, mb: 1 }}>
        Amount
      </Typography>
      <Box sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
        <Typography sx={{ fontSize: { xs: '14px' }, fontWeight: 500 }}>
          Range:
        </Typography>
        <Typography
          sx={{ fontSize: { xs: '14px' }, fontWeight: 500, color: '#126FAA' }}
        >
          10M
        </Typography>
      </Box>
    </Box>
  );
};
export default Amount;
