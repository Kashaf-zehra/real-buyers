import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import ProposalSlider from './ProposalSlider';

const ProposalMedia = ({ media, mediaType }) => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={6}
          gap={'26px'}
          sx={{ display: 'flex', padding: '5px', alignItems: 'center' }}
        >
          <Typography
            variant="h2"
            sx={{
              color: 'black',
              fontSize: '20px',
              fontWeight: '500',
            }}
          >
            {mediaType === 'videos' ? 'Project Videos' : 'Project Images'}
          </Typography>
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
              '&:hover': {
                color: '#fff',
              },
              borderRadius: '50px',
            }}
            variant="outlined"
          >
            View All
          </Button>
        </Grid>
      </Grid>
      <Grid container sx={{ display: 'flex', gap: 'auto' }}>
        <ProposalSlider media={media} mediaType={mediaType} />
      </Grid>
    </>
  );
};

export default ProposalMedia;
