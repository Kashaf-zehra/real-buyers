import React from 'react';
import { Box, useTheme } from '@mui/material';

import PropertyCardSaleBody from './Properties/PropertyCardSaleBody';
import PropertyCardRentBody from './Properties/PropertyCardRentBody';
import AgentTitle from './AgentTitle';
import PropertyForSale from './Properties/PropertyForSale';
import PropertyForRent from './Properties/PropertyForRent';

const AgentProperties = ({
  data,
  allLink,
  sellLink,
  rentLink,
  allProperties,
  forRentCount,
  forSellCount,
  rentData,
  sellData,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Box sx={{ pt: 8 }}>
        <AgentTitle
          count={allProperties || ''}
          title={`${data?.first_name} ${data?.last_name}`}
          link={allLink}
        />
        <Box
          sx={{
            pt: 2,
            [theme.breakpoints.up('lg')]: {
              width: '438px',
            },
          }}
        >
          <PropertyForSale
            data={forSellCount || 'No'}
            sellCount={data?.counts?.sellCount}
            link={sellLink}
          />
          <PropertyCardSaleBody sellData={sellData} link={sellLink} />
        </Box>
        <Box
          sx={{
            pt: 2,
            [theme.breakpoints.up('lg')]: {
              width: '438px',
            },
          }}
        >
          <PropertyForRent
            data={forRentCount || 'No'}
            rentCount={data?.counts?.rentCount}
            link={rentLink}
          />
          <PropertyCardRentBody rentData={rentData} link={rentLink} />
        </Box>
      </Box>
    </Box>
  );
};

export default AgentProperties;
