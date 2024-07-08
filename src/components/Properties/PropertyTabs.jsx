'use client';
import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import PropertyListingCard from './PropertyListingCard';

const CustomTabPanel = ({ data, value, index, propertyType }) => {
  const filteredProperties =
    value === 0
      ? data
      : data?.filter(
          (property) => property?.propertyData?.propertyType === propertyType
        );

  const propertyTitle = filteredProperties?.map((property) => ({
    id: property?.id,
    Propertytitle: property?.title,
  }));

  const itemsPerRow = { xs: 12, sm: 6, md: 4, lg: 3, xl: 3 };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography
            sx={{ fontSize: '20px', fontWeight: 600, px: '70px' }}
            py={2}
          >
            {`Location of ${propertyType} For sale in Karachi`}
          </Typography>
          <Grid container spacing={2}>
            {propertyTitle?.map(({ id, Propertytitle }) => (
              <Grid item key={id} {...itemsPerRow}>
                <Typography fontWeight="300" fontSize="16px" textAlign="center">
                  <Link href={`/project/${id}`}>{Propertytitle}</Link>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const PropertyTabs = ({ data }) => {
  const [value, setValue] = useState(0);
  const [propertyType, setPropertyType] = useState('');

  useEffect(() => {
    setValue(0);
  }, []);

  const uniquePropertyTypes = [];
  const seenPropertyTypes = {};

  data?.forEach((property) => {
    if (!seenPropertyTypes[property?.propertyData?.propertyType]) {
      uniquePropertyTypes.push(property?.propertyData?.propertyType);
      seenPropertyTypes[property?.propertyData?.propertyType] = true;
    }
  });

  const tabData = [
    { label: 'All', propertyType: 'All' },
    ...uniquePropertyTypes.map((propertyType) => ({
      label: propertyType,
      propertyType: propertyType,
    })),
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const selectedPropertyType = tabData[newValue].label;

    // Update the selected property type
    setPropertyType(selectedPropertyType === 'All' ? '' : selectedPropertyType);
  };

  const filteredProperties =
    propertyType === ''
      ? data
      : data?.filter(
          (property) => property?.propertyData?.propertyType === propertyType
        );
  return (
    <>
      <Box
        sx={{ borderRadius: '10px', border: '1px solid #E4E4E4', mt: '20px' }}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {tabData?.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab?.label}
                  sx={{ fontSize: '20px', fontWeight: '700' }}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </Box>
          {tabData?.map((tab, index) => (
            <CustomTabPanel
              data={data}
              key={index}
              value={value}
              index={index}
              propertyType={tab?.propertyType}
            />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          borderRadius: '10px',
          border: '1px solid #E4E4E4',
          my: '50px',
          padding: '56px 30px',
          '@media (min-width: 280px) and (max-width: 375px)': {
            padding: '10px',
          },
        }}
      >
        <PropertyListingCard propertyData={filteredProperties} />
      </Box>
    </>
  );
};
export default PropertyTabs;
