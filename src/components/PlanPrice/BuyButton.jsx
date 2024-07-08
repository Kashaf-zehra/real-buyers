import { Button } from '@mui/material';
import React from 'react';

const BuyButton = ({ BuyButton }) => {
  return (
    <Button
      sx={{
        width: '111px',

        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '24.2px',
        alignItems: 'center',
        border: '2px solid #1176AD',
        borderRadius: '30px',
        color: '#1176AD',
      }}
    >
      {BuyButton}
    </Button>
  );
};

export default BuyButton;
