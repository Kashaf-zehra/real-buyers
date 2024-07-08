import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';

const Profile = ({ profileInfo, defaultImage }) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          width: '100%',
          height: '100%',
          textAlign: 'center',
          py: 1,
        }}
      >
        <Grid item xs={12}>
          <Avatar
            src={profileInfo?.profile_image || defaultImage}
            sx={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '5px auto',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 500,
              textDecoration: 'underline',
              textUnderlineOffset: '5px',
              color: '#444444',
            }}
          >
            {profileInfo?.first_name || ''}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 700,
              marginTop: '-9px',
            }}
          >
            {profileInfo?.agency_name || ''}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
