import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';

import PostTitle from './ads-form-components/PostTitle';
import PropertyFacilities from './ads-form-components/PropertyFacilities';
import AddAmenities from './ads-form-components/AddAmenities';

const PropertyFeatures = ({
  formik,
  setSelectedAmenities,
  selectedAmenities,
  handleSeletedAmenites,
  propertyData,
}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = (items) => {
    setSelectedItems(items);
  };

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px #E4E4E4 solid',
            borderRadius: '10px',
            height: 'auto',
            width: '100%',
            backgroundColor: 'white',
          }}
        >
          <PostTitle text={propertyData?.postTitles?.featureamenities} />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                mx: 'auto',
                width: 'auto',
                height: '100%',
                gap: 4.5,
                p: 6,
                alignItems: { xs: 'center', sm: 'start' },
                justifyContent: { xs: 'center' },
                flexDirection: 'column',
              }}
            >
              <PropertyFacilities
                propertyInformation={propertyData?.feature}
                formik={formik}
              />
              <AddAmenities
                formik={formik}
                onSelected={handleSelectedItems}
                selectedItems={selectedItems}
                propertyInformation={propertyData}
                setSelectedAmenities={setSelectedAmenities}
                selectedAmenities={selectedAmenities}
                handleSeletedAmenites={handleSeletedAmenites}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertyFeatures;
