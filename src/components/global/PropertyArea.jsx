import React from 'react';
import { Typography } from '@mui/material';

const PropertyArea = ({ area, areaUnits, heading }) => {
  return (
    <div>
      <Typography
        sx={{ fontSize: { xs: '14px', md: '18px' }, fontWeight: 600 }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          padding: '3px',
          fontSize: { xs: '14px', md: '16px' },
          fontWeight: 400,
        }}
      >
        {`${area}  ${areaUnits}`}
      </Typography>
    </div>
  );
};
export default PropertyArea;
