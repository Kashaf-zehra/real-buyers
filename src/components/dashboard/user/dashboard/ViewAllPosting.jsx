import React from 'react';
import { Box } from '@mui/system';

import DashboardTitle from './DashboardTitle';
import SeeAllPosting from './SeeAllPosting';
import { UserDashboardPage } from '@/src/constants/user/Dashboard';

const ViewAllPosting = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '@media (min-width: 280px) and (max-width:445px)': {
          flexDirection: 'column',
          gap: 1,
        },
        px: { xs: 4, sm: 6 },
        py: 3,
      }}
    >
      <Box>
        <DashboardTitle title={UserDashboardPage?.sub_Title} />
      </Box>
      <Box>
        <SeeAllPosting
          title={UserDashboardPage?.see_All_Posting?.title}
          link={UserDashboardPage?.see_All_Posting?.link}
          subTitle={UserDashboardPage?.sub_Title}
        />
      </Box>
    </Box>
  );
};

export default ViewAllPosting;
