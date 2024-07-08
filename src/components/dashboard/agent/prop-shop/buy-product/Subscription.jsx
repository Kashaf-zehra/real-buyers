import React from 'react';
import { Box, Typography } from '@mui/material';

import { Buy_Product_Data } from '@/src/constants/agent/Buy_Product';
import BuyProductTable from './BuyProductTable';
import { useSelector } from 'react-redux';

const Subscription = ({ title }) => {
  const packages = useSelector((state) => state.packages);
  const { BuyProductColumns } = Buy_Product_Data;
  return (
    <Box
      sx={{
        width: '100%',
        py: 2,
        border: '2px solid #E4E4E4',
        borderRadius: '10px',
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h4" sx={{ px: { xs: 4 }, pb: { xs: 2 } }}>
        {title}
      </Typography>
      <BuyProductTable columns={BuyProductColumns} rows={packages} />
    </Box>
  );
};

export default Subscription;
