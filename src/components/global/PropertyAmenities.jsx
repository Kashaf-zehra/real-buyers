import React from 'react';
import { Typography } from '@mui/material';

const PropertyAmenities = ({ propertyData, heading }) => {
  return (
    <>
      <Typography
        sx={{ fontSize: { xs: '14px', md: '18px' }, fontWeight: 600 }}
      >
        {heading}
      </Typography>
      {propertyData?.map((item, index) => (
        <Typography
          sx={{
            padding: '3px',
            fontSize: { xs: '14px', md: '16px' },
            fontWeight: 500,
          }}
          key={index}
        >
          {item}
        </Typography>
      ))}
    </>
  );
};
export default PropertyAmenities;
