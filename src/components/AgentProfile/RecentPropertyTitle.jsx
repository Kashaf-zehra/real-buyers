import React from 'react';
import Typography from '@mui/material/Typography';

import useMediaQuery from '@mui/material/useMediaQuery';
import { RECENT_PROPERTIES } from '@/src/constants/AgentProfile';

const RecentPropertyTitle = ({ data }) => {
  const isMediumScreen = useMediaQuery('(max-width:750px)');
  const variant = isMediumScreen ? 'h5' : 'h4';
  return (
    <Typography
      variant={variant}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 600,
        fontSize: { lg: '30px', md: '25px', sm: '20px', xs: '20px' },
        fontStyle: 'normal',
        lineHeight: 'normal',
        color: '#333',
        marginBottom: '50px',
        mt: 2,
      }}
    >
      {`${RECENT_PROPERTIES} ${data?.first_name} ${data?.last_name}`}
    </Typography>
  );
};

export default RecentPropertyTitle;
