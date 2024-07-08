import React from 'react';
import { Typography, Box } from '@mui/material';

const ReachBuyer = ({ title, description, fontSize }) => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, sm: 0.7 } }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          color: 'black',
          fontSize: { xs: '24px', md: '28px', lg: '30px' },
          lineHeight: { xs: 1.5, sm: 1.5 },
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          color: '#126FAA',
          fontSize: fontSize
            ? fontSize
            : { xs: '20px', md: '23px', lg: '25px' },
          fontWeight: 400,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};
export default ReachBuyer;
