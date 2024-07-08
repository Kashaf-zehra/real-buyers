import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { addToCart } from '@/src/redux/slices/settings/PakageCartSlice';

const PriceBox = ({ price, buttonText, id, data }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(data?.filter((x) => x.id === id)[0]));
  };

  return (
    <Box
      sx={{
        display: { xs: 'block', sm: 'flex' },
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: { xs: '100%', sm: 'auto' }, py: { xs: 1.5, sm: 0 } }}>
        <Typography variant="body1" sx={{ color: '#949494', fontWeight: 700 }}>
          Rs.{price}
        </Typography>
      </Box>
      <Box>
        <Button
          variant="outlined"
          sx={{
            width: { xs: '100%', sm: '161px' },
            fontSize: '12px',
            height: '41px',
            borderRadius: { xs: '7px', sm: '10px' },
          }}
          onClick={handleAdd}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default PriceBox;
