import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const PropertyMapLocation = ({
  locationpurpose,
  propertyType,
  city,
  geoLocation,
  location,
}) => {
  return (
    <Box sx={{ padding: '5px' }}>
      <Typography sx={{ fontSize: '18px', fontWeight: 500 }}>
        Location & Purpose
      </Typography>
      <Box display={'flex'} gap={'5px'}>
        <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>
          Purpose:
        </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>
          {locationpurpose}
        </Typography>
      </Box>
      <Box display={'flex'} gap={'5px'}>
        <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>
          Property Type:
        </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>
          {propertyType}
        </Typography>
      </Box>
      <Box display={'flex'} gap={'5px'}>
        <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>
          Location:
        </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>
          {location}
        </Typography>
      </Box>
      <Box display={'flex'} gap={'5px'}>
        <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>
          City:
        </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>
          {city}
        </Typography>
      </Box>
      <br></br>
      <iframe
        title="Property Location"
        src={geoLocation}
        width="100%"
        height="300"
        frameBorder="0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};
export default PropertyMapLocation;
