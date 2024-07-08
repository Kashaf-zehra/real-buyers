'use client';
import React from 'react';
import { Bounce } from 'react-awesome-reveal';
import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const FooterCta = ({ data }) => {
  return (
    <Box
      sx={{
        background: '#F5F6FB',
        px: { xs: '3%', md: '5%', lg: '13%', xl: '15%' },
        '@media (min-width: 270px) and (max-width: 500px)': {
          px: '12%',
        },
        // py: {
        //   xs: '20px',
        //   sm: '40px',
        //   md: '40px',
        // },
        margin: 'auto',
      }}
    >
      <Grid container sx={{ alignItems: 'center' }}>
        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          sx={{
            justifyContent: 'right',
            alignSelf: 'right',
            pl: { lg: '170px' },
            pr: { lg: '120px' },
            py: {
              xs: '20px',
              sm: '40px',
              md: '40px',
            },
          }}
        >
          <Typography
            sx={{
              color: '#666',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '28px',
              pr: {
                xs: '0',
                md: '0px',
              },
            }}
          >
            {data?.description}
          </Typography>
          <Grid
            container
            sx={{
              display: 'flex',
              gap: { xs: '10px', sm: '20px', md: '25px', lg: '30px' },
            }}
          >
            {data?.features?.map((feature, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                lg={3}
                md={4}
                sx={{
                  display: 'flex',
                  gap: '10px',
                  py: { xs: '7px', md: '10px' },
                  justifyContent: { lg: 'flex-end' },
                }}
              >
                <Image
                  src={feature.icon}
                  height={30}
                  width={30}
                  alt={'Images'}
                />
                <Box>
                  <Typography
                    sx={{
                      color: '#1176ad',
                      textAlign: 'left',
                      fontSize: '16px',
                      fontWeight: '400',
                    }}
                  >
                    {feature.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Bounce direction="left" triggerOnce duration={200}>
            <Box sx={{ display: 'flex', pt: '20px', gap: '10px' }}>
              {data?.appIcons?.map((appicon, index) => (
                <Link
                  href={appicon.link}
                  key={index}
                  xs={3}
                  sx={{ display: 'flex', gap: '20px' }}
                >
                  <Image
                    src={appicon.icon}
                    alt={appicon.title}
                    width={145}
                    height={40}
                  />
                </Link>
              ))}
            </Box>
          </Bounce>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{
            py: {
              xs: '20px',
              sm: '40px',
              md: '0px',
            },
            display: 'flex',
            justifyContent: { md: 'flex-end' },
          }}
        >
          <Bounce direction="right" triggerOnce duration={300}>
            <Box>
              <Image
                src={data?.appImage}
                alt={'App'}
                width={350}
                height={400}
              />
            </Box>
          </Bounce>
        </Grid>
      </Grid>
      <Grid container sx={{ py: '28px' }}>
        <Grid
          item
          xs={12}
          sm={8}
          md={8.5}
          sx={{
            px: { lg: '170px' },
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '28px',
              fontWeight: 400,
              color: '#666666',
            }}
          >
            {data?.paymentMethodsDescription}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={3.5}
          sx={{
            display: 'flex',
            justifyContent: { md: 'center' },
            gap: '20px',
            py: {
              xs: '10px',
              md: '0px',
            },
          }}
        >
          {data?.paymentMethods?.map((method, index) => (
            <Box key={index}>
              <Image
                src={method?.icon}
                alt={method?.alt}
                width={37}
                height={23}
              />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterCta;
