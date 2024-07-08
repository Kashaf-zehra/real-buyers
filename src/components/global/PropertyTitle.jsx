import React from 'react';
import { Typography } from '@mui/material';

const PropertyTitle = ({ title, heading }) => {
  return (
    <div>
      <Typography
        sx={{
          padding: '5px',
          fontSize: { xs: '15px', md: '30px' },
          fontWeight: 600,
        }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          padding: '5px',
          fontSize: { xs: '14px', md: '16px' },
          fontWeight: 400,
        }}
      >
        {title}
      </Typography>
    </div>
  );
};
export default PropertyTitle;
