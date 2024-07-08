'use client';
import React from 'react';
import { Box, Grid } from '@mui/material';
import PostTitle from './ads-form-components/PostTitle';
import PropertyInformation from './ads-form-components/PropertyInformation';

const AdInformation = ({ propertyData, formik }) => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: '#fff',
        border: '1px #E4E4E4 solid',
        borderRadius: '10px',
        height: { xl: '681px' },
      }}
    >
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("/images/listing-page/realbuyer.svg")',
          backgroundSize: '60% 60%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top 38%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            width: '100%',
          }}
        >
          <PostTitle text={propertyData?.postTitles?.adInfo} />
          <Box
            sx={{
              width: '100%',
              height: { xs: 'auto', md: '100%' },
              display: 'flex',
              justifyContent: 'space-evenly',
              py: { xs: 5, sm: 7 },
            }}
          >
            <PropertyInformation postData={propertyData} formik={formik} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default AdInformation;
