import React from 'react';
import { Typography } from '@mui/material';

import { PROPERTY_PURPOSE } from '@/src/constants/Properties';

const PropertyLocationDetails = ({ locationPurpose, propertyType, city }) => {
  return (
    <>
      <Typography sx={{ fontSize: '18px', fontWeight: 500 }}>
        {PROPERTY_PURPOSE.propertyPurpose.locationAndPurpose}
      </Typography>
      <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>
        {PROPERTY_PURPOSE.propertyPurpose.purpose}: {locationPurpose}
      </Typography>
      <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>
        {PROPERTY_PURPOSE.propertyPurpose.propertyType}: {propertyType}
      </Typography>
      <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>
        {PROPERTY_PURPOSE.propertyPurpose.city}: {city}
      </Typography>
      <Typography sx={{ fontSize: '16px', fontWeight: 400 }} variant="body1">
        {PROPERTY_PURPOSE.propertyPurpose.location}:
      </Typography>
    </>
  );
};
export default PropertyLocationDetails;
