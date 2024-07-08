import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const UsefulLink = ({ data, isMediumScreen, styles }) => {
  return (
    <Box
      sx={{
        display: isMediumScreen ? 'none' : 'block',
        '@media (min-width: 500px) and (max-width: 900px)': {
          display: 'flex',
          flexDirection: 'row',
        },
      }}
    >
      <Grid item xs={12} md={2}>
        <Box>
          <Typography
            variant="h6"
            color={'primary'}
            sx={{
              pb: { xs: '10px', md: '20px' },
              pt: { xs: '20px', md: '0px' },
            }}
          >
            {data?.usefulLink}
          </Typography>
          {data?.usefulLinks?.map((link, index) => (
            <Link href={link?.link} key={index}>
              <Typography key={index} variant="body1" sx={{ pb: '15px' }}>
                {link?.title}
              </Typography>
            </Link>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={2}>
        <Box>
          <Box>
            <Box sx={{ pb: '16px' }}>
              <Typography
                variant="h6"
                color={'primary'}
                sx={{
                  pb: { xs: '10px', md: '20px' },
                  pt: { xs: '20px', md: '0px' },
                }}
              >
                {data?.downloadApp}
              </Typography>
              <Typography variant="body1" sx={styles.text}>
                {data?.appDownload?.description}
              </Typography>
            </Box>
            <Box spacing={2} sx={{ pb: '10px' }}>
              {data?.appDownload?.options?.map((option, index) => (
                <Grid key={index} item xs={6}>
                  <Box sx={{ py: '10px' }}>
                    <Link href={option?.link}>
                      <Image
                        src={option?.logo}
                        alt={option?.title}
                        width={150}
                        height={40}
                        style={styles.icon}
                      />
                    </Link>
                  </Box>
                </Grid>
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: '8px', px: '5px' }}>
              {data?.socialMediaIcons?.map((socialIcon, index) => (
                <Link key={index} href={socialIcon?.link}>
                  <Image
                    key={index}
                    src={socialIcon?.logo}
                    alt={socialIcon?.title}
                    width={25}
                    height={25}
                  />
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
export default UsefulLink;
