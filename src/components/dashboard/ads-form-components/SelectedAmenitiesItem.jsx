import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const SelectedAmenitiesItems = ({ selectedItems }) => {
  return (
    <div>
      <Box
        component={'ul'}
        sx={{
          display: 'grid',
          py: 2,
          px: 4,
          mx: 'auto',
          columnGap: { md: 4, lg: 1 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: `repeat(${selectedItems.length < 4 ? selectedItems.length : 4}, 1fr)`,
          },
          '@media (min-width: 1200px) and (max-width: 1439px)': {
            gridTemplateColumns: 'repeat(4, 1fr)',
            columnGap: 1,
          },
          width: '100%',
          overflowY: 'auto',
        }}
      >
        {selectedItems?.map((item, index) => (
          <Box
            component={'li'}
            sx={{
              my: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '10px',
              gap: '5px',
            }}
            key={index}
          >
            <Image src={item?.image} width={25} height={25} alt={'amenities'} />
            <Typography>{item?.title}</Typography>
          </Box>
        ))}
      </Box>
    </div>
  );
};
export default SelectedAmenitiesItems;
