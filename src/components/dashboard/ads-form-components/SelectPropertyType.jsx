'use client';
import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';

import PropertyTypes from './PropertyPlot';
import { PROPERTY_PURPOSE } from '@/src/constants/Properties';

const SelectProperyType = ({
  image,
  label,
  iconTitle,
  plotType,
  commercialType,
  formik,
}) => {
  const [activePropertyType, setActivePropertyType] = useState('House');
  const [activePropertySubType, setActivePropertySubType] = useState(null);
  const [propertyType, setPropertyType] = useState(activePropertyType);
  const [propetySubType, setPropetySubType] = useState();

  const handlePropertyType = (text) => {
    setActivePropertyType(text);
    setPropertyType(text);
    formik?.setFieldValue('propertyCategory', text);
  };

  const handlePropetySubType = (text) => {
    setActivePropertySubType(text);
    setPropetySubType(text);
    formik?.setFieldValue('propertyType', text);
  };

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
          pb: { xs: 2, sm: 2, xl: 0 },
          cursor: 'pointer',
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
              src={image}
              alt={'properttype'}
            />
            <Typography
              sx={{
                fontSize: { xs: '17px', sm: '20px' },
                fontWeight: 400,
                color: '#333333',
                display: { xs: 'flex', sm: 'none' },
              }}
            >
              {label}
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
              mb: { xs: 3, xl: 0 },
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
              {label}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'space-evenly', sm: 'start' },
                gap: { xs: 1, sm: 2 },
              }}
            >
              <Button
                sx={{
                  fontSize: { xs: '15px', sm: '20px' },
                  fontWeight: 400,
                  color: activePropertyType === 'House' ? '#FB631C' : '#666',
                  position: 'relative',
                  '&::after': {
                    content: "''",
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -8,
                    borderBottom: `3px solid ${activePropertyType === 'House' ? '#FB631C' : 'transparent'}`,
                  },
                }}
                onClick={() =>
                  handlePropertyType(PROPERTY_PURPOSE?.propertyType?.house)
                }
              >
                {PROPERTY_PURPOSE?.propertyType?.house}
              </Button>
              <Button
                sx={{
                  fontSize: { xs: '15px', sm: '20px' },
                  fontWeight: 400,
                  color: activePropertyType === 'Plots' ? '#FB631C' : '#666',
                  position: 'relative',
                  '&::after': {
                    content: "''",
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -8,
                    borderBottom: `3px solid ${activePropertyType === 'Plots' ? '#FB631C' : 'transparent'}`,
                  },
                }}
                onClick={() =>
                  handlePropertyType(PROPERTY_PURPOSE?.propertyType?.plots)
                }
              >
                {PROPERTY_PURPOSE?.propertyType?.plots}
              </Button>
              <Button
                sx={{
                  fontSize: { xs: '15px', sm: '20px' },
                  fontWeight: 400,
                  color:
                    activePropertyType === 'Commercial' ? '#FB631C' : '#666',
                  position: 'relative',
                  '&::after': {
                    content: "''",
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -8,
                    borderBottom: `3px solid ${activePropertyType === 'Commercial' ? '#FB631C' : 'transparent'}`,
                  },
                }}
                onClick={() =>
                  handlePropertyType(PROPERTY_PURPOSE?.propertyType?.commercial)
                }
              >
                {PROPERTY_PURPOSE?.propertyType?.commercial}
              </Button>
            </Box>
            <hr style={{ width: '100%' }}></hr>
            {activePropertyType === 'House' && (
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', sm: 'start' },
                  gap: 2,
                  py: 2,
                }}
              >
                {iconTitle?.map((item, index) => (
                  <Box
                    sx={{
                      borderRadius: '20px',
                      border: `1px solid ${
                        activePropertySubType === item?.title
                          ? '#126FAA'
                          : '#E7E7E7'
                      }`,
                      color:
                        activePropertySubType === item?.title
                          ? '#FB631C'
                          : '#666',
                      backgroundColor:
                        activePropertySubType === item?.title
                          ? '#F4F5F7 !important'
                          : '#fff',
                      display: 'flex',
                      flexDirection: { xs: 'row', md: 'row' },
                      width: { xs: '80%', sm: '45%', md: '230px', lg: '250px' },
                      '@media (min-width: 600px) and (max-width: 751px )': {
                        width: '45%',
                      },
                      justifyContent: 'center',
                      height: { xs: '50px', md: '55px' },
                      alignItems: 'center',
                      gap: '12px',
                    }}
                    key={index}
                    onClick={() => {
                      handlePropetySubType(item?.title);
                    }}
                  >
                    <Box
                      component={'img'}
                      sx={{
                        width: { xs: 25, sm: 33 },
                        height: { xs: 25, sm: 33 },
                      }}
                      src={
                        activePropertySubType === item?.title
                          ? item?.activeImage
                          : item?.image
                      }
                      alt={'property'}
                    />
                    <Typography
                      sx={{ fontSize: { xs: '15px', md: '18px', lg: '20px' } }}
                    >
                      {item?.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
            {activePropertyType === 'Plots' && (
              <PropertyTypes
                data={plotType}
                propertyType={propertyType}
                handlePropetySubType={handlePropetySubType}
                activePropertySubType={activePropertySubType}
              />
            )}
            {activePropertyType === 'Commercial' && (
              <PropertyTypes
                data={commercialType}
                propertyType={propertyType}
                activePropertySubType={activePropertySubType}
                propetySubType={propetySubType}
                handlePropetySubType={handlePropetySubType}
              />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default SelectProperyType;
