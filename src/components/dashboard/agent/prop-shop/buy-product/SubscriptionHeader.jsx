import React from 'react';
import { Typography } from '@mui/material';

const SubscriptionHeader = ({ headerName }) => {
  return (
    <Typography sx={{ pl: 3, fontSize: '18px', fontWeight: 700 }}>
      {headerName}
    </Typography>
  );
};

export default SubscriptionHeader;
