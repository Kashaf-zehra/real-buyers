import React from 'react';
import { IconButton, Box, Typography } from '@mui/material';
import Image from 'next/image';

const CustomNumberInput = ({ value, handleIncrement, handleDecrement }) => {
  return (
    <>
      <Box
        sx={{
          width: '94px',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '6px',
          p: 0,
          borderRadius: '5px',
          background: '#EFEEEF',
          height: '35px',
        }}
      >
        <Box
          sx={{
            px: 0.8,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={handleIncrement}
            disableRipple
            sx={{
              width: 'auto',
              pl: 0,
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <Image
              src={'/images/listing-page/increment.svg'}
              width={25}
              height={22}
              alt={'increment'}
            />
          </IconButton>
          <Typography
            sx={{
              width: '100%',
              textAlign: 'center',
              fontSize: '15px',
              fontWeight: 500,
            }}
          >
            {value}
          </Typography>
          <IconButton
            onClick={handleDecrement}
            disableRipple
            sx={{
              width: 'auto',
              pr: 0,
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <Image
              src={'/images/listing-page/minus.svg'}
              width={25}
              height={22}
              alt={'decrement'}
            />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
export default CustomNumberInput;
