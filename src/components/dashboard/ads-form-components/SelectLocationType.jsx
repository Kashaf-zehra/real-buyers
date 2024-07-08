import React from 'react';
import { Typography, Box } from '@mui/material';

import MapFrame from './MapFrame';

const SelectLocationType = ({ propertyInformation }) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'center', sm: 'start' },
          justifyContent: { xs: 'center', md: 'center' },
          gap: 2,
          pb: { xs: 2, sm: 2 },
        }}
      >
        <Box sx={{ width: { xs: '90%', sm: '45px' }, pl: '0 !important' }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              gap: 1.5,
            }}
          >
            <Box
              component={'img'}
              sx={{ width: { xs: 37, sm: 47 }, height: { xs: 35, sm: 45 } }}
              src={propertyInformation?.location?.images}
              alt={'location'}
            />
            <Typography
              sx={{
                fontSize: { xs: '17px', sm: '20px' },
                fontWeight: 400,
                color: '#333333',
                display: { xs: 'flex', sm: 'none' },
              }}
            >
              {propertyInformation?.location?.text}
              <span style={{ marginLeft: '5px', color: '#FF0000' }}>*</span>
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: { xs: '90%', sm: '80%', md: '80%', lg: '70%' } }}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              mt: 0.8,
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '17px', sm: '20px' },
                fontWeight: 400,
                color: '#333333',
                mb: 2,
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              {propertyInformation?.location?.text}
              <span style={{ marginLeft: '5px', color: '#FF0000' }}>*</span>
            </Typography>
            <MapFrame width="100%" height="103px" />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default SelectLocationType;
