'use client';
import React from 'react';
import { Grid, Box } from '@mui/material';
import { useSelector } from 'react-redux';

import BiddingProfile from '@/src/components/dashboard/agent/live-bidding/BiddingProfile';
import LiveBiddingTitle from './LiveBiddingTitle';
import PostListingCard from './PostListingCard';

import { MAIN_TITLE } from '@/src/constants/agent/Live_Bidding';

const LiveBidding = () => {
  const user_ads = useSelector((state) => state?.postRequestAds?.userPostings);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2.5}>
          <Grid item xs={12} md={12} lg={12} xl={9.34} xxl={10}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
                mt: { lg: '10px' },
                px: { xs: '4.89px' },
              }}
            >
              <LiveBiddingTitle title={MAIN_TITLE} />
              <PostListingCard ads={user_ads} height={'1098px'} />
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={12} xl={2.64} xxl={2}>
            <BiddingProfile />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LiveBidding;
