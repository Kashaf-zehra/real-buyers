import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import { Proposals } from '@/src/constants/Proposals';

const ProposalStats = ({ proposal }) => {
  const renderLocationInfo = () => {
    return Object.keys(Proposals.stats)
      .slice(1)
      .map((key) => (
        <Box key={key} sx={{ display: 'flex', gap: '5px' }}>
          <Typography
            sx={{
              color: '#333',
              fontSize: '14px',
              fontWeight: '700',
            }}
            variant="body1"
          >
            {Proposals.stats[key]}
          </Typography>
          <Typography
            key={key}
            sx={{
              color: '#126FAA',
              fontSize: '14px',
              fontWeight: '500',
            }}
            variant="body1"
          >
            {proposal?.propertyData?.propertyStats[key]}
          </Typography>
        </Box>
      ));
  };

  return (
    <Box sx={{ padding: '5px' }}>
      <Typography
        sx={{
          color: '#000',
          fontSize: '20px',
          fontWeight: '500',
        }}
      >
        {Proposals?.stats?.title}
      </Typography>
      {renderLocationInfo()}
    </Box>
  );
};

export default ProposalStats;
