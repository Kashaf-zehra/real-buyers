import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const Title = ({ title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '10px',
      }}
    >
      <Box
        sx={{
          padding: '0px 0px 0px 31px',
        }}
      >
        <Typography
          variant="Body1"
          sx={{
            color: '#000',
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '19.36px',
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Title;
