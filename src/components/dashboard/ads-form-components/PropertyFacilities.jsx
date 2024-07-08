import React from 'react';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';

import Counter from '../inputNumber/counter';
import { useSelector } from 'react-redux';

const PropertyFacilities = ({ propertyInformation, formik }) => {
  const selectedAmenities = useSelector(
    (state) => state?.postListingAds?.addAmenities
  );
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          py: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)',
          },
          '@media (min-width: 1200px) and (max-width: 1439px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          width: '100%',
          maxHeight: '1550px',
          overflowY: 'auto',
        }}
      >
        {propertyInformation?.map((item, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: { xs: 'center', sm: 'left', md: 'left' },
                alignItems: 'center',
                width: { xs: 'auto', md: 'auto' },
                py: 2,
                gap: 2,
              }}
            >
              <Image
                src={item?.image}
                width={50}
                height={50}
                alt={'facility'}
              />
              <Box
                sx={{
                  display: 'flex',
                  width: 'auto',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  textAlign: { xs: 'center', sm: 'start' },
                  gap: 1,
                }}
              >
                <Box sx={{ width: '130px' }}>
                  <Typography sx={{ fontSize: '20px', fontWeight: 400 }}>
                    {item?.title}
                  </Typography>
                </Box>
                <Box sx={{ width: 'auto' }}>
                  <Counter
                    formik={formik}
                    name={item?.name}
                    title={item?.title}
                    limit={item?.limit}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
        {selectedAmenities?.map((item, index) => (
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'left', md: 'space-between' },
              alignItems: 'center',
              fontSize: { xs: '18px', md: '20px' },
              fontWeight: 400,
              gap: { xs: '0px', md: '8px' },
              py: { xs: 3, sm: 2 },
            }}
            key={index}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',

                gap: 2,
                width: { xs: 'auto', md: 'auto' },
              }}
            >
              <Box
                sx={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: '#F4F5F7',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: '5px',
                }}
              >
                <Image
                  src={item?.image}
                  width={30}
                  height={30}
                  alt="facility"
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  width: 'auto',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  textAlign: { xs: 'center', sm: 'start' },
                  gap: 1,
                }}
              >
                <Box sx={{ width: '130px' }}>
                  <Typography sx={{ fontSize: '20px', fontWeight: 400 }}>
                    {item?.text}
                  </Typography>
                </Box>
                <Box sx={{ width: 'auto' }}>
                  <Counter
                    formik={formik}
                    name={item?.name}
                    title={item?.text}
                    limit={item?.limit}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
export default PropertyFacilities;
