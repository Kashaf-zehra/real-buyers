import React from 'react';
import { Box } from '@mui/material';

const DashboardTitle = ({ title, mt, fontSize, ml, marginProposal }) => {
  return (
    <Box
      sx={{
        fontWeight: 500,
        fontSize: { xs: '25px', sm: '25px', md: fontSize ? fontSize : '25px' },
        lineHeight: '36.31px',
        color: '#000000',
        mt: mt,
        '@media (min-width: 960px) and (max-width: 1450px)': {
          marginLeft: ml,
        },
        '@media (min-width: 1440px) and (max-width: 1450px)': {
          marginLeft: marginProposal,
        },
      }}
    >
      {title}
    </Box>
  );
};

export default DashboardTitle;
