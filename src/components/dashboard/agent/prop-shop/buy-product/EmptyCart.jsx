import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const EmptyCart = ({ title, item }) => {
  return (
    <Box
      sx={{
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        my: { xs: 0, md: 2 },
      }}
    >
      <Image
        src={'/images/prop-shop/cart.svg'}
        alt={'prop-image'}
        width={164}
        height={164}
      />
      <Typography variant="p" sx={{ my: 1, color: '#A5A5A5' }}>
        {item}
      </Typography>
      <Typography variant="h5" sx={{ color: '#A5A5A5' }}>
        {title}
      </Typography>
    </Box>
  );
};

export default EmptyCart;
