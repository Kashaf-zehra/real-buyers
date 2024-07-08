import React from 'react';
import { Box, Typography } from '@mui/material';

const PropertyTypes = ({
  data,
  handlePropetySubType,
  activePropertySubType,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', sm: 'start' },
        gap: 2,
        py: 2,
      }}
    >
      {data?.map((item, index) => (
        <Box
          sx={{
            borderRadius: '20px',
            border: `1px solid ${
              activePropertySubType === item?.title ? '#126FAA' : '#E7E7E7'
            }`,
            color: activePropertySubType === item?.title ? '#FB631C' : '#666',
            backgroundColor:
              activePropertySubType === item?.title
                ? '#F4F5F7 !important'
                : '#fff',
            display: 'flex',
            flexDirection: { xs: 'row', md: 'row' },
            width: { xs: '80%', sm: '220px', md: '230px', lg: '250px' },
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
            sx={{ width: { xs: 25, sm: 33 }, height: { xs: 25, sm: 33 } }}
            src={
              activePropertySubType == item?.title
                ? item?.activeImage
                : item?.image
            }
            alt={'property'}
          />
          <Typography sx={{ fontSize: { xs: '15px', md: '18px', lg: '20px' } }}>
            {item?.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default PropertyTypes;
