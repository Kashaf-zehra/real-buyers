import React from 'react';
import { Typography } from '@mui/material';

const LiveBiddingTitle = ({ title }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: { xs: '22px', sm: '25px', md: '30px' },
        lineHeight: 'normal',
        letterSpacing: '1.95px',
      }}
    >
      {title}
    </Typography>
  );
};

export default LiveBiddingTitle;
