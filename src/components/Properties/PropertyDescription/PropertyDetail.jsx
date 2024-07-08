import React from 'react';
import { Box, Grid } from '@mui/material';

import PropertyTitle from './PropertyTitle';
import PropertyDemand from './PropertyDemand';
import PropertyAmenities from './PropertyAmenities';
import PropertyArea from './PropertyArea';
import PropertyDescription from './PropertyDescription';
import PropertyMapLocation from './PropertyMapLocation';

import { PROPERTY_ESTATE } from '@/src/constants/Properties';

const PropertyDetails = ({ propertyDetailsData }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={11} sx={{ padding: '5px' }}>
        <Box sx={{ padding: '15px' }}>
          <PropertyTitle
            title={propertyDetailsData?.title}
            heading={PROPERTY_ESTATE?.propertyDetails?.title}
          />
          <PropertyDescription
            description={propertyDetailsData?.description}
            heading={PROPERTY_ESTATE?.propertyDetails?.decription}
          />
          <PropertyMapLocation
            locationpurpose={propertyDetailsData?.purpose}
            propertyType={propertyDetailsData?.propertyType}
            city={propertyDetailsData?.city}
            location={propertyDetailsData?.locality}
            geoLocation={propertyDetailsData?.geo_location}
          />
          <Box sx={{ pt: '15px' }}>
            <PropertyAmenities
              propertyData={propertyDetailsData.other_features}
              heading={PROPERTY_ESTATE?.propertyDetails?.amenities}
            />
          </Box>
          <Box sx={{ pt: '15px' }}>
            <PropertyArea
              area={propertyDetailsData?.area}
              areaUnits={propertyDetailsData?.areaUnit}
              heading={PROPERTY_ESTATE?.propertyDetails?.area}
            />
          </Box>
          <Box sx={{ pt: '15px' }}>
            <PropertyDemand
              demand={propertyDetailsData?.amount}
              demandUnits={propertyDetailsData?.amountCurrency}
              heading={PROPERTY_ESTATE?.propertyDetails?.demand}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertyDetails;
