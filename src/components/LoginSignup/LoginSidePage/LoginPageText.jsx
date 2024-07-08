'use client';
import React from 'react';
import { Typography, Box } from '@mui/material';

import { LOGIN_FORM } from '@/src/constants/Login';

const LoginPageText = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mx: 'auto',
      }}
    >
      <Typography
        sx={{
          color: '#126FAA',
          fontSize: { xs: '25px', md: '35px' },

          fontWeight: 500,
          textAlign: 'center',
        }}
      >
        {LOGIN_FORM.loginCard.connect}
      </Typography>
      <Typography
        sx={{
          color: '#FF631C',
          fontSize: { xs: '15px', md: '20px' },

          fontWeight: 400,
          textAlign: 'center',
        }}
      >
        {LOGIN_FORM.loginCard.propertyDealer}
      </Typography>
    </Box>
  );
};
export default LoginPageText;
