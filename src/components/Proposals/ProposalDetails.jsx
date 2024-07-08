import React from 'react';
import { Avatar, Grid, Box, Typography, Button } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';

const ProposalHeader = ({ reject, connect }) => {
  return (
    <Grid container borderBottom={'1px solid #E4E4E4'}>
      <Grid item xs={6} gap={'26px'} sx={{ p: '30px', display: 'flex' }}>
        <Box>
          <Avatar src={''} sx={{ width: 60, height: 60 }} />
        </Box>
        <Box>
          <Typography
            variant="primary"
            sx={{
              color: '#126FAA',
              fontSize: '15px',
              fontWeight: '500',
            }}
          >{`John Doe`}</Typography>
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
            {`city`}, {`country`} - {`3:16pm local time`}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ p: '40px', display: 'flex', justifyContent: 'flex-end' }}
      >
        <Button
          onClick={reject}
          variant="outlined"
          sx={{
            mx: '4px',
            fontWeight: 600,
            width: '150px',
            height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
            color: '#FB631C',
            '&:hover': {
              color: '#fff',
            },
            borderRadius: '50px',
          }}
        >
          Reject
        </Button>
        <Button
          variant="primary"
          onClick={connect}
          sx={{
            mx: '4px',
            fontWeight: 600,
            width: '150px',
            height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
            color: '#fff',
            borderRadius: '50px',
          }}
        >
          <Typography sx={{ color: '#fff' }}>Connect</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProposalHeader;
