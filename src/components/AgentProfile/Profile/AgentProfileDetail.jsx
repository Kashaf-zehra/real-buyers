import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import ProfileInfo from './ProfileInfo';
import {
  ALT,
  FOR_RENT,
  FOR_RENT_ICON,
  FOR_SALE,
  FOR_SALE_ICON,
  LOCATION_ICON,
} from '@/src/constants/AgentProfile';

const AgentProfileDetail = ({
  data,
  path,
  user,
  agent,
  forSellCount,
  forRentCount,
}) => {
  return (
    <Grid
      item
      xs={11}
      sm={12}
      md={6}
      sx={{
        display: 'flex',
        width: '100%',
        mx: { xs: 'auto', sm: 0 },
        justifyContent: { xs: 'center', sm: 'start' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginLeft: { xs: 0, sm: '20px' },
          my: { xs: 2 },
          alignItems: { xs: 'center', sm: 'start' },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#1176AD',
            fontSize: { xs: '18px', sm: '20px', md: '25px', lg: '30px' },
            fontWeight: '600',
          }}
        >
          {`${data?.first_name || 'user'} ${data?.last_name || 'name'}`}
        </Typography>

        {path?.includes(user) || path?.includes(agent) ? (
          <ProfileInfo title={data?.email || ''} />
        ) : (
          <>
            <ProfileInfo
              title={`${data?.country || ''} ${data?.city || ''}`}
              icon={LOCATION_ICON}
              alt={ALT}
            />
            <ProfileInfo
              title={`${forSellCount || 'No Properties'} ${FOR_SALE || ''}`}
              icon={FOR_SALE_ICON}
              alt={ALT}
            />
            <ProfileInfo
              title={`${forRentCount || 'No Properties'} ${FOR_RENT || ''}`}
              icon={FOR_RENT_ICON}
              alt={ALT}
            />
          </>
        )}
      </Box>
    </Grid>
  );
};

export default AgentProfileDetail;
