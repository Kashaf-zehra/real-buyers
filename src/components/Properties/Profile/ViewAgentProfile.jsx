import React from 'react';
import { Typography, Button, Avatar, Box } from '@mui/material';
import Link from 'next/link';

import { AGENT_PROFILE_DATA } from '@/src/constants/AgentProfile';

const ViewAgentProfile = ({ image, name, link }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 195,
        background: 'white',
        borderRadius: 2,
        border: '1px solid #e0e0e0',
        marginTop: '40px',
        gap: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          p: 1,
        }}
      >
        <Avatar src={image} sx={{ width: 100, height: 100 }} />
        <Typography
          variant="secondary"
          sx={{
            ml: 2,
            fontSize: { xs: '15px', md: '25px' },
            fontWeight: 600,
          }}
        >
          {name}
        </Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          background: '#F5F6FB',
        }}
      >
        <Link href={link}>
          <Button
            variant="dimSecondary"
            sx={{
              width: '100%',
              fontSize: { xs: '15px', md: '20px' },
              background: '#F5F6FB',
              fontWeight: 500,
              textTransform: 'capitalize',
              '&:hover': {
                background: '#F5F6FB',
              },
            }}
          >
            {AGENT_PROFILE_DATA.agentProfile}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
export default ViewAgentProfile;
