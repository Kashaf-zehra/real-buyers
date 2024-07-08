import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const ListingInfo = ({ propertyInfo }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: { xs: 'flex-start', sm: 'center' },
        flexDirection: { xs: 'column', md: 'row' },
        flexWrap: 'wrap',
        gap: { xs: 4, md: 8 },
      }}
    >
      {propertyInfo?.map((item, index) => (
        <Box
          sx={{
            width: { xs: 'auto', sm: '500px', md: 'auto' },
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
          key={index}
        >
          <Box
            component={'img'}
            src={item?.image}
            sx={{ width: { xs: 32, sm: 40 }, height: { xs: 32, sm: 40 } }}
            alt={'propertyimages'}
          />
          <Typography
            sx={{
              fontSize: { xs: '15px', md: '18px', lg: '20px' },
              fontWeight: 400,
              color: '#909394',
            }}
          >
            {item?.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
export default ListingInfo;
