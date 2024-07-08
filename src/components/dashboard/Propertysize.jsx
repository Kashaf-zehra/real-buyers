'use client';
import React from 'react';
import { Box, Grid } from '@mui/material';

import PostTitle from './ads-form-components/PostTitle';
import PropertyAreaSize from './ads-form-components/PropertyAreaSize';
import PropertyInstallment from './ads-form-components/PropertyInstallment';
import { PROPERTY_BUYING_DETAIL } from '@/src/constants/Preview_Data';

const PropertySize = ({ formik, propertyData }) => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: '#fff',
        border: '1px #E4E4E4 solid',
        borderRadius: '10px',
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
          backgroundPosition: 'center top 40%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: 'auto',
          }}
        >
          <PostTitle text={propertyData?.postTitles?.sizeprice} />
          <Box
            sx={{
              width: '100%',
              height: { xs: 'auto', md: '100%' },
              display: 'flex',
              justifyContent: 'space-evenly',
              py: 7,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <PropertyAreaSize
                propertySizeInformation={propertyData?.propertySize}
                propertyBuyingDetails={PROPERTY_BUYING_DETAIL?.sellingDetails}
                selectCity={propertyData?.selectCityOptions}
                aeraSizes={propertyData?.aeraSizes}
                currency={propertyData?.currency}
                formik={formik}
              />
              <PropertyInstallment
                propertyInstallmentInfo={propertyData?.installment}
                propertyBuyingDetails={PROPERTY_BUYING_DETAIL?.sellingDetails}
                formik={formik}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertySize;
