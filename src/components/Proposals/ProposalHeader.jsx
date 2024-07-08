import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Proposals } from '@/src/constants/Proposals';

const ProposalHeader = ({ proposal }) => {
  const agents = useSelector((state) => state?.agents);

  const selectedAgent = agents?.find((agent) => agent?.id === proposal?.agent);

  if (!selectedAgent) {
    console.error(`Agent with id ${proposal} not found`);
  }

  return (
    <Grid container borderBottom={'1px solid #E4E4E4'}>
      <Grid item xs={6} gap={'26px'} sx={{ p: '30px', display: 'flex' }}>
        <Box>
          <Image
            src={selectedAgent?.profileImage}
            width={60}
            height={60}
            sx={{ borderRadius: '50%' }}
            alt={'Images'}
          />
        </Box>
        <Box>
          <Typography
            variant="primary"
            sx={{
              color: '#126FAA',
              fontSize: '15px',
              fontWeight: '500',
            }}
          >
            {`${selectedAgent?.firstName} ${selectedAgent?.lastName}`}
            {proposal?.agentName}
          </Typography>
          <br />
          <LocationOnIcon />
          <Typography
            variant="secondary"
            sx={{
              color: '#757474',
              fontSize: '15px',
              fontWeight: '500',
            }}
          >
            {`${selectedAgent?.city}, ${selectedAgent?.country} - ${selectedAgent?.time} 
            ${selectedAgent?.timeZone}`}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ p: '40px', display: 'flex', justifyContent: 'flex-end' }}
      >
        <Button
          sx={{
            mx: '4px',
            fontWeight: 600,
            width: '150px',
            height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
            color: '#FB631C',
            border: '2px solid #FB631C',
            '&:hover': {
              color: '#fff',
            },
            borderRadius: '50px',
          }}
          variant="outlined"
        >
          {Proposals?.rejectbuttons?.title}
        </Button>
        <Button
          sx={{
            mx: '4px',
            fontWeight: 600,
            width: '150px',
            height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
            color: '#fff',
            borderRadius: '50px',
          }}
          variant="primary"
        >
          <Typography sx={{ color: '#fff' }}>
            {Proposals?.connectbuttons?.title}
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProposalHeader;
