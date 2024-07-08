'use client';
import React from 'react';
import { Box } from '@mui/system';

import VisibilityIcon from '@mui/icons-material/Visibility';

function HideUnhideButton({ handleClickOpen }) {
  return (
    <Box
      onClick={handleClickOpen}
      sx={{
        width: { xs: '20%', sm: '45px' },
        '@media(min-width: 280px) and (max-width:400px)': {
          width: '100%',
        },
        height: '45px',
        color: '#FB631C',
        borderRadius: '10px',
        border: '1px solid #FB631C',
        background: '#FFF',
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
        alignItems: 'center',
        '&:hover': {
          color: '#fff',
          backgroundColor: '#FB631C',
        },
      }}
    >
      <VisibilityIcon color="#FB631C" />
    </Box>
  );
}
export default HideUnhideButton;
