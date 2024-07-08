import React from 'react';
import { Grid, Typography } from '@mui/material';
import Link from 'next/link';

const AvailableConnects = ({ profileInfo, connectsText, buyNow }) => {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          py: 3,
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant={'body2'}
          sx={{
            color: '#FB631C',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
          }}
        >
          {`${profileInfo?.available_connects || 0} ${connectsText || ''}`}
        </Typography>
        <Link href={`${buyNow?.link || '#'}`}>
          <Typography
            sx={{
              mx: 'auto',
              width: '110px',
              height: '33px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFF',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: 'normal',
              borderRadius: '5px',
              border: '1px solid #E4E4E4',
              background: '#FB631C',
            }}
          >
            {buyNow?.text || ''}
          </Typography>
        </Link>
      </Grid>
    </>
  );
};

export default AvailableConnects;
