import React from 'react';
import { Box, Button } from '@mui/material';

const SaveChanges = ({ handleClickButton, saveChangeButton }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        background: '#FB631C',
        width: '160px',
        height: '44px',
        justifyContent: 'center',
        marginLeft: '11px',
        borderRadius: '5px',
      }}
    >
      <Button
        sx={{
          color: 'white',
          fontSize: '15px',

          fontWeight: 400,
        }}
        onClick={handleClickButton}
      >
        {saveChangeButton}
      </Button>
    </Box>
  );
};
export default SaveChanges;
