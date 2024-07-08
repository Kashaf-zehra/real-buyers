import React from 'react';
import { Box } from '@mui/material';

import PreferenceSettings from '@/src/components/dashboard/PreferenceSettings';

const UserPreferences = () => {
  return (
    <>
      <Box
        sx={{
          mx: { xs: 'auto', lg: 0 },
          display: 'flex',
          width: { xs: '100%', lg: '1200px' },
          '@media (min-width: 1440px) and (max-width: 1568px)': {
            width: '100%',
          },
          '@media (min-width: 960px) and (max-width: 1439px)': {
            width: '90%',
          },
        }}
      >
        <PreferenceSettings />
      </Box>
    </>
  );
};
export default UserPreferences;
