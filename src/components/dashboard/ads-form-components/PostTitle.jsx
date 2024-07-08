import React from 'react';
import { Typography, Box } from '@mui/material';

const PostTitle = ({ text }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid #E4E4E4',
      }}
    >
      <Typography
        sx={{
          color: '#126FAA',
          fontSize: { xs: '22px', sm: '25px' },
          '@media (min-width: 280px) and (max-width:320px)': {
            fontSize: '20px',
            textWrap: 'wrap',
            px: 4,
          },
          '@media (min-width: 320px) and (max-width:380px)': {
            mx: 3,
          },
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
export default PostTitle;
