import React from 'react';
import Link from 'next/link';
import { Grid, Typography } from '@mui/material';
import { SEE_DETAILS } from '@/src/constants/AgentProfile';

const SliderCardSeeDetails = ({ link }) => {
  return (
    <>
      <Grid
        item
        bgcolor="#FAFAFA"
        xs={12}
        sx={{
          color: '#909394',
          fontSize: '14px',
          fontWeight: '300',

          padding: 1.8,
        }}
      >
        <Link
          href={`/projects/${link?.property_id}`}
          sx={{
            align: 'center',
            fontSize: '0.875rem',
            fontWeight: '500',

            fontStyle: 'normal',
            color: '#000000',
          }}
        >
          <Typography
            variant="body1"
            color="#000000"
            sx={{ textAlign: 'center' }}
          >
            {SEE_DETAILS}
          </Typography>
        </Link>
      </Grid>
    </>
  );
};

export default SliderCardSeeDetails;
