import React from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { Box } from '@mui/system';

const SliderCardLocation = ({ location }) => {
  return (
    <Grid container justifyContent="flex-start" alignItems="center">
      <Grid item>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Image
            src="/images/agent-profile-icons/hub.svg"
            width={10}
            height={10}
            alt={'hub rever'}
          />
          <Typography
            variant="body2"
            sx={{
              color: '#909394',
              fontSize: { xs: '12px', md: '15px' },
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: 'normal',
              ml: 1,
            }}
          >
            {location}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SliderCardLocation;
