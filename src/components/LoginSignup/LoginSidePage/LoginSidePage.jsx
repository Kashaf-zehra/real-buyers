'use client';
import React from 'react';
import { Grid } from '@mui/material';

import LoginPageText from './LoginPageText';
import RealEstateImage from './RealEstateImage';
import PropertyBuilding from './BuildingImage';

const LoginSidePage = () => {
  return (
    <Grid>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          padding: '50px',
          '@media (max-width: 1300px)': {
            gap: '67px',
          },
          '@media (max-width: 1100px)': {
            gap: '60px',
          },
        }}
      >
        <RealEstateImage />
        <LoginPageText />
        <PropertyBuilding />
      </Grid>
    </Grid>
  );
};
export default LoginSidePage;
