'use client';
import React from 'react';
import { Box } from '@mui/system';
import { Divider } from '@mui/material';
import { useSelector } from 'react-redux';

import ViewAllPosting from './ViewAllPosting';
import PostRequestButton from './PostRequestButton';

import PostRequestCard from './PostRequestCard';
import { findData } from '@/src/utils/dashboardUtils';

const UserDashboard = () => {
  const userAds = useSelector((state) => state?.postRequestAds?.userPostings);
  const userId = useSelector((state) => state?.currentUser?.user?.id);
  const find_user = findData(userId, userAds);

  return (
    <>
      <PostRequestButton />
      <Box
        sx={{
          background: '#fff',
          borderRadius: '10px',
          border: '1px solid #E4E4E4',
          mt: 6,
          mb: 6,
          mx: { xs: 'auto', lg: 0 },
          maxWidth: { lg: '1200px', xl: '1200px', xxl: '1500px' },
        }}
      >
        <ViewAllPosting />
        <Divider />
        <Box
          sx={{
            p: { xs: 2, sm: 6 },
          }}
        >
          <PostRequestCard ads={find_user} height={'1098px'} />
        </Box>
      </Box>
    </>
  );
};

export default UserDashboard;
