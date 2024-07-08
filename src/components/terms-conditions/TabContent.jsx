import React from 'react';
import { Box, Typography } from '@mui/material';

const TabContent = ({ selectedTab }) => {
  return (
    <Box
      sx={{
        borderRadius: '20px',
        border: '1px solid #E4E4E4',
        background: '#FFF',
        px: '50px',
        py: '30px',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: '#333',
          fontSize: '14px',
          fontWeight: '600',
          textTransform: 'uppercase',
          pb: '40px',
        }}
      >
        {selectedTab?.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#333',
          fontSize: '12px',
          fontWeight: '400',
        }}
        dangerouslySetInnerHTML={{ __html: selectedTab?.content }}
      />
    </Box>
  );
};

export default TabContent;
