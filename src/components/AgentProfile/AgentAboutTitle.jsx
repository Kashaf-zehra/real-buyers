import React from 'react';
import { Typography } from '@mui/material';

import { ABOUT } from '@/src/constants/AgentProfile';

const AgentAboutTitle = ({ title }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        color: '#000',
        fontSize: { lg: '25px', md: '20px', sm: '18px', xs: '16px' },
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
        mb: 2,
      }}
    >
      {`${ABOUT} ${title}`}
    </Typography>
  );
};

export default AgentAboutTitle;
