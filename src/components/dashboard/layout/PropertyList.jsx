import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import Title from './Title';
import Link from 'next/link';

const PropertyList = ({ profileInfo }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            width: '65%',
            maxWidth: '210px',
            minWidth: '180px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              padding: '0px 0px 0px 0px',
            }}
          >
            <Title title={'Property Listed'} />
          </Box>
          <Box
            sx={{
              padding: '10px 0px 0px 20px',
            }}
          >
            <Link href="/dashboard/proposals">
              <Image
                src="/images/Live-bidding-icons/category.svg"
                width={30}
                height={30}
                alt={'icons'}
              />
            </Link>
          </Box>
        </Box>
        <Typography
          sx={{
            color: '#666',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '16.94px',
            letterSpacing: '4%',
            paddingLeft: '31px',
            paddingBottom: '2px',
          }}
        >
          {`${profileInfo?.propertyListed} property listed`}
        </Typography>
        <Title title={'Profile Visibilty'} />
        <Typography
          sx={{
            color: '#666',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '16.94px',
            letterSpacing: '4%',
            paddingLeft: '31px',
            paddingBottom: '2px',
          }}
        >
          {profileInfo?.ProfileVisibilty}
        </Typography>
        <Title title={'Lead Preferences'} />
        <Typography
          sx={{
            color: '#666',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '16.94px',
            letterSpacing: '4%',
            paddingLeft: '31px',
            paddingBottom: '2px',
          }}
        >
          {profileInfo?.LeadPreferences}
        </Typography>
      </Grid>
    </Box>
  );
};

export default PropertyList;
