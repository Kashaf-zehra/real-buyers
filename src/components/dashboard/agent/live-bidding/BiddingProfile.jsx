import React from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

import ProfileCompletness from '@/src/components/dashboard/layout/ProfileCompletness';
import AvailableConnects from '@/src/components/dashboard/layout/AvailableConnects';
import Profile from '@/src/components/dashboard/layout/Profile';
import { useSelector } from 'react-redux';
import {
  AVAIALABLE_CONNECTS,
  BUY_NOW,
  PROFILE_COMPLETNESS,
  PROFILE_COMPLETNESS_DESCRIPTION,
  PROFILE_IMAGE_DEFAULT,
} from '@/src/constants/agent/Live_Bidding';

const BiddingProfile = () => {
  const current_user = useSelector((state) => state?.currentUser?.user);

  return (
    <Box sx={{ marginTop: '15px' }}>
      <Grid container>
        <Grid
          border={2}
          item
          sx={{
            border: '1px solid #E4E4E4',
            borderRadius: '10px',
            background: '#FFF',
            width: { xs: '100%' },
            height: '100%',
            py: { xl: '1.25px' },
          }}
        >
          <Profile
            profileInfo={current_user}
            defaultImage={PROFILE_IMAGE_DEFAULT}
          />
          <ProfileCompletness
            title={PROFILE_COMPLETNESS}
            description={PROFILE_COMPLETNESS_DESCRIPTION}
          />
          <AvailableConnects
            profileInfo={current_user}
            connectsText={AVAIALABLE_CONNECTS}
            buyNow={BUY_NOW}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BiddingProfile;
