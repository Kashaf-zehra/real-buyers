import React from 'react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

const PostListingResponsiveButton = ({ icon, buttonName }) => {
  return (
    <Button variant={'primary'} sx={{ display: 'block' }}>
      <Box
        sx={{
          display: 'flex',
          marginRight: '8px',
          marginLeft: '8px',
          p: 0.6,
          color: '#fff',
        }}
      >
        <Image src={icon} width={20} height={20} alt={'icon'} />
        <Typography mx={1}>{buttonName}</Typography>
      </Box>
    </Button>
  );
};

export default PostListingResponsiveButton;
