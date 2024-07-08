import React from 'react';
import { Typography } from '@mui/material';

const AgentDescription = ({ description }) => {
  return (
    <Typography
      variant="primary"
      sx={{
        width: '100%',
        fontSize: { xs: '12px', md: '16px' },
        fontWeight: 400,
        textAlign: 'start',
        paddingBottom: '12px',
      }}
    >
      {`${description.trim().slice(0, 150)}...`}
    </Typography>
  );
};
export default AgentDescription;
