import React from 'react';
import { Box, Typography } from '@mui/material';

const Title = ({ title }) => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        px: 4,
        py: 4,
        borderBottom: '2px solid #E4E4E4',
      }}
    >
      <Typography
        sx={{
          color: '#000',
          fontSize: { xs: '12.1px', sm: '24px' },
          fontWeight: 700,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
