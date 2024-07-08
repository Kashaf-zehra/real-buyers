'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  alignItems: 'center',
  display: 'flex',
  border: 'none',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
}));

const ProfileFormMidText = ({ text }) => {
  return (
    <Box>
      <Grid item xs={12}>
        <Item
          sx={{
            backgroundColor: '#F0F6FA',
            height: '71px',
            paddingLeft: { lg: 7, md: 7, xs: 2 },
          }}
        >
          <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>
            {text}
          </Typography>
        </Item>
      </Grid>
    </Box>
  );
};

export default ProfileFormMidText;
