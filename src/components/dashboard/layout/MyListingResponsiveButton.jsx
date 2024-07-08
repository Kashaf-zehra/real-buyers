import React from 'react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

const MyListingResponsiveButton = ({ icon, buttonName }) => {
  return (
    <>
      <Button
        sx={{
          display: 'block',
          color: '#000',
          border: '1px solid #E7E7E7',
          my: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            marginRight: '8px',
            marginLeft: '8px',
            p: 0.5,
          }}
        >
          <Image src={icon} width={20} height={20} alt={buttonName} />
          <Typography mx={1}>{buttonName}</Typography>
        </Box>
      </Button>
    </>
  );
};

export default MyListingResponsiveButton;
