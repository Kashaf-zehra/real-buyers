'use client';
import React from 'react';
import { Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import UsefulLink from './FooterResponsivness';

const styles = {
  container: {
    backgroundColor: '#F5F5F5',
    color: '#fff',
    background:
      'linear-gradient(180deg, rgba(0, 15, 34, 1.00) 0%, rgba(14, 30, 46, 0.97) 60.69004535675049%, rgba(0, 21, 44, 1.00) 100%)',
  },
  logo: {
    width: '150px',
    height: 'auto',
  },
  address: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  contactInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  icon: {
    marginRight: '5px',
  },
  socialIcons: {
    display: 'flex',
    marginTop: '10px',
  },
  socialIcon: {
    marginRight: '10px',
  },
};
const Footer = ({ data }) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'xxl'));
  return (
    <Box sx={styles?.container}>
      <Grid
        container
        justifyContent="center"
        sx={{
          py: '50px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          '@media (min-width:280px) and (max-width:500px)': {
            paddingLeft: '40px',
          },
        }}
      >
        <Grid item xs={12} md={4.5}>
          <Box sx={{ pr: '10.4%' }}>
            <Link href={data?.link}>
              <Image src={data?.logo} alt={'Logo'} width={155} height={37} />
            </Link>
            <Typography
              sx={{
                pt: '10px',
                pb: '20px',
                fontSize: '16px',
                lineHeight: '22px',
                fontWeight: 400,
              }}
            >
              {data?.introText?.paragraph1}
            </Typography>
            <Typography sx={{ pb: '20px', fontSize: '16px', fontWeight: 400 }}>
              {data?.introText?.paragraph2}
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <LocationOnIcon style={styles.icon} sx={{ color: '#fb631c' }} />
              <Typography
                sx={{ pb: '13px', fontSize: '16px', fontWeight: 400 }}
              >
                {data?.address?.line1}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <PhoneIcon style={styles.icon} sx={{ color: '#fb631c' }} />
              <Link href={`tel:${data?.phone}`}>
                {' '}
                <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>
                  {data?.phone}
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{ display: isMediumScreen ? 'block' : 'none' }}
        >
          <Box>
            <Typography
              variant="h6"
              color={'primary'}
              sx={{
                fontSize: { xs: '15px', md: '18px', lg: '20px' },
                pb: { xs: '10px', md: '20px' },
                pt: { xs: '20px', md: '0px' },
              }}
            >
              {data?.usefulLink}
            </Typography>
            {data?.usefulLinks?.map((link, index) => (
              <Link href={link?.link} key={index}>
                <Typography
                  key={index}
                  sx={{
                    pb: '13px',
                    pt: '4px',
                    fontSize: '14px',
                    fontWeight: 400,
                  }}
                >
                  {link?.title}
                </Typography>
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{ display: isMediumScreen ? 'block' : 'none' }}
        >
          <Box>
            <Box>
              <Box>
                <Typography
                  variant="h6"
                  color={'primary'}
                  sx={{
                    fontSize: { xs: '15px', md: '18px', lg: '20px' },
                    pb: { xs: '10px', md: '20px' },
                    pt: { xs: '20px', md: '0px' },
                  }}
                >
                  {data?.downloadApp}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    lineHeight: '16.94px',
                    fontWeight: 400,
                    mt: '3px',
                  }}
                >
                  {data?.appDownload?.description}
                </Typography>
              </Box>
              <Box spacing={2} sx={{ pb: '10px' }}>
                {data?.appDownload?.options?.map((option, index) => (
                  <Grid key={index} item xs={6}>
                    <Box sx={{ pt: '20px' }}>
                      <Link href={option?.link}>
                        <Image
                          src={option?.logo}
                          alt={option?.title}
                          width={145}
                          height={39}
                          style={styles.icon}
                        />
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Box>
              <Box sx={{ display: 'flex', gap: '8px', px: '5px', pt: '5px' }}>
                {data?.socialMediaIcons?.map((socialIcon, index) => (
                  <Link key={index} href={socialIcon?.link}>
                    <Image
                      key={index}
                      src={socialIcon?.logo}
                      alt={socialIcon?.title}
                      width={24}
                      height={25}
                    />
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
        <UsefulLink
          data={data}
          isMediumScreen={isMediumScreen}
          styles={styles}
        />
      </Grid>
    </Box>
  );
};

export default Footer;
