'use client';
import React from 'react';
import Link from 'next/link';
import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { usePathname } from 'next/navigation';

import { NOT_FOUND } from '@/src/constants/Global';

const NotFoundSection = ({ heading, message, link, goBackTo }) => {
  const currentPath = usePathname();
  const path =
    currentPath?.includes('/agent/') || currentPath?.includes('/user/');

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        my: '16px',
      }}
    >
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '20px',
          background: '#FFF',
          border: `1px solid ${path ? '#E4E4E4' : 'none'}`,
        }}
      >
        <Grid item xs={12}>
          <Box sx={{ px: '50px', py: '30px', textAlign: 'center' }}>
            <Box py={'20px'}>
              <Image
                src={'/images/404/4042.gif'}
                height={500}
                width={500}
                alt={'Images'}
              />
            </Box>
            <Box pt={'20px'}>
              <Typography
                variant="h1"
                sx={{
                  color: '#333',
                  fontWeight: '500',
                }}
              >
                {heading || NOT_FOUND?.pageTitle}
              </Typography>
            </Box>
            <Box pb={'20px'}>
              <Typography
                variant="h4"
                sx={{
                  color: '#333',
                  fontWeight: '400',
                }}
              >
                {message || NOT_FOUND?.errorDescription}
              </Typography>
            </Box>
            <Box>
              <Link href={link || NOT_FOUND?.backButtonLink}>
                <Button
                  variant="primary"
                  type="button"
                  sx={{
                    width: 'auto',
                    height: { xs: '35px', sm: '45px' },
                    textTransform: 'uppercase',
                    fontSize: { xs: '10.7px', sm: '16px' },
                    borderRadius: '5px',
                    '&:hover': { color: '#fff' },
                  }}
                >
                  <ArrowBackIosIcon />
                  {goBackTo || NOT_FOUND?.backButtonLabel}
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotFoundSection;
