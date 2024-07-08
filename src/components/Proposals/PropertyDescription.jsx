import React from 'react';
import { Typography } from '@mui/material';
import { PROPERTY_DETAILS } from '@/src/constants/Properties';

const PropertyDescription = ({ proposal }) => {
  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          pb: '20px',
          color: '#000',
          fontSize: '20px',
          fontWeight: '500',
        }}
      >
        {PROPERTY_DETAILS?.propertyDetals}
      </Typography>
      <Typography
        sx={{
          padding: '5px',
          color: '#333',
          fontSize: '15px',
          fontWeight: '600',
        }}
        variant="h3"
      >
        {proposal?.proposalTitle}
      </Typography>
      <Typography
        sx={{
          padding: '5px',
          color: ' #333',
          fontSize: '12px',
          fontWeight: '400',
        }}
      >
        {proposal?.proposalDescription}
      </Typography>
    </div>
  );
};
export default PropertyDescription;
