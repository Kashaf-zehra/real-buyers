import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { STARTING_FROM } from '@/src/constants/AgentProfile';

const SliderCardPrice = ({ price, unit }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        variant="body1"
        sx={{
          color: '#909394',
          fontWeight: 600,
          fontSize: { xs: '10px', sm: '12px', md: '16px' },
          fontStyle: 'normal',
        }}
      >
        {STARTING_FROM}
      </Typography>
      <Box display={'flex'} alignItems={'center'}>
        <Typography
          variant="body1"
          sx={{
            color: '#FB631C',
            fontWeight: 500,
            marginLeft: 1,
            verticalAlign: 'baseline',
            fontSize: { xs: '10px', sm: '12px', md: '14px' },
          }}
        >
          {unit}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#FB631C',
            fontWeight: 500,
            marginLeft: '5px',
            verticalAlign: 'baseline',
            fontSize: { xs: '12px', sm: '14px', md: '16px' },
          }}
        >
          {price}
        </Typography>
      </Box>
    </Box>
  );
};

export default SliderCardPrice;
