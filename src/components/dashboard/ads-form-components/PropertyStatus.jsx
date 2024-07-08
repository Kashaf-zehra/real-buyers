'use client';
import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';

const PropertyStatus = ({ propertyInformation, propertyData, formik }) => {
  const [activePropertyStatus, setActivePropertyStatus] = useState('Sell');

  const handleChange = (val) => {
    formik?.setFieldValue('purpose', val);
    setActivePropertyStatus(val);
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
              src={propertyInformation?.images}
              sx={{ width: { xs: 37, sm: 47 }, height: { xs: 35, sm: 45 } }}
              alt={'purpose'}
            />
            <Typography
              sx={{
                color: '#333333',
                fontSize: { xs: '18px', sm: '20px' },
                fontWeight: 400,
                display: { xs: 'flex', sm: 'none' },
              }}
            >
              {propertyInformation?.text}
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
              gap: 2,
              mt: 0.8,
              mb: 3,
            }}
          >
            <Typography
              sx={{
                color: '#333333',
                fontSize: { xs: '18px', sm: '20px' },
                fontWeight: 400,
                display: { xs: 'none', sm: 'flex' },
                mb: 2,
              }}
            >
              {propertyInformation?.text}
            </Typography>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
              }}
            >
              {propertyData?.sell?.map((item, index) => (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    borderRadius: '20px',
                    gap: 1.5,
                    width: { xs: '80%', sm: '45%', md: '152px', lg: '152px' },
                    height: { xs: '50px', md: '55px' },
                    '@media (min-width: 600px) and (max-width: 751px )': {
                      width: '45%',
                    },
                    alignItems: 'center',
                    border: `1px solid ${
                      activePropertyStatus === item?.text
                        ? '#126FAA'
                        : '#E7E7E7'
                    }`,
                    color:
                      activePropertyStatus === item?.text ? '#FB631C' : '#666',
                    backgroundColor:
                      activePropertyStatus === item?.text
                        ? '#F4F5F7 !important'
                        : '#fff',
                  }}
                  key={index}
                  onClick={() => handleChange(item?.text)}
                >
                  <Box
                    component={'img'}
                    sx={{
                      width: { xs: 25, sm: 33 },
                      height: { xs: 25, sm: 33 },
                    }}
                    src={
                      activePropertyStatus == item?.text
                        ? item?.activeImage
                        : item?.image
                    }
                    width={31}
                    height={31}
                    alt="sell-rent"
                  />
                  <Box
                    component={'input'}
                    value={item?.text}
                    onClick={() => handleChange(item?.text)}
                    type="button"
                    sx={{
                      fontSize: { xs: '15px', md: '18px', lg: '20px' },
                      fontWeight: 400,
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default PropertyStatus;
