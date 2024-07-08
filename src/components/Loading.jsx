import React from 'react';
import { Box, Typography } from '@mui/material';
import { LOADING_DATA } from '@/src/constants/Loading_Data';

const Loading = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          backgroundColor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box>
          <Box
            component={'img'}
            sx={{ maxWidth: '70px', height: '70px', mb: 2 }}
            src={LOADING_DATA?.img || ''}
          />
          <Typography>{LOADING_DATA?.text || ''}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Loading;
