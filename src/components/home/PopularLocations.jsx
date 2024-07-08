'use client';
import React, { useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Heading from './Heading';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { FEATURED_HEADINGS, FEATURE_BUTTONS } from '@/src/constants/Home';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const PopularLocations = ({ data }) => {
  const [filteredProposalsData, setFilteredProposalsData] = useState(
    data?.filter((item) => item?.type === 'sale')
  );
  const [filterType, setFilterType] = useState('sale');

  const handleFilter = (type) => {
    setFilterType(type);
    if (type === 'sale') {
      setFilteredProposalsData(data?.filter((item) => item?.type === 'sale'));
    } else if (type === 'rent') {
      setFilteredProposalsData(data?.filter((item) => item?.type === 'rent'));
    } else {
      setFilteredProposalsData(data);
    }
  };
  return (
    <Box
      sx={{
        pt: { xs: '0px', lg: '60px' },
        pb: '30px',
        textAlign: 'center',
        backgroundImage: `url('/images/bgs/popular-location.svg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Container sx={{ px: '10%', maxWidth: '1213px !important' }}>
        <Heading heading={FEATURED_HEADINGS.popularLocations} paragraph={''} />
        <Box
          sx={{
            pt: '14px',
            pb: '8px',
          }}
        >
          <Box
            sx={{
              pt: '14px',
              pb: { xs: '0px', sm: '30px', md: '30px', lg: '58px' },
            }}
          >
            <Button
              sx={{
                mx: '15px',
                fontWeight: 600,
                width: '116px',
                height: '40px',
                color: filterType === 'sale' ? '#fff' : 'primary',
                mb: { xs: '10px' },
              }}
              variant={filterType === 'sale' ? 'primary' : 'outlined'}
              onClick={() => handleFilter('sale')}
            >
              <Typography
                sx={{
                  color: filterType === 'sale' ? '#fff' : 'primary',
                  fontSize: '15px',
                }}
              >
                {FEATURE_BUTTONS.forSale}
              </Typography>
            </Button>
            <Button
              sx={{
                mx: '15px',
                fontWeight: 600,
                width: '116px',
                height: '40px',
                textAlign: 'start',
                color: filterType === 'rent' ? '#fff' : 'primary',
                mb: { xs: '10px' },
              }}
              variant={filterType === 'rent' ? 'primary' : 'outlined'}
              onClick={() => handleFilter('rent')}
            >
              <Typography
                sx={{
                  color: filterType === 'rent' ? '#fff' : 'primary',
                  fontSize: '15px',
                }}
              >
                {' '}
                {FEATURE_BUTTONS.byRent}
              </Typography>
            </Button>
          </Box>
          <Grid container sx={{ display: 'flex' }} columnSpacing={2}>
            {filteredProposalsData?.map((item, index) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                <Box
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                    border: '1px solid #cbcbcb',
                    maxWidth: '350px',
                    maxHeight: { lg: '350px' },
                    mx: 'auto',
                    my: '15px',
                    '&:hover': {
                      boxShadow: '0px 0px 5px 0px rgba(18, 111, 170, 0.70)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      py: '10px',
                      backgroundColor: '#f5f6fb',
                      color: '#333',
                      fontWeight: 600,
                      fontSize: '16px',
                    }}
                  >
                    {item?.title}
                  </Box>
                  <Box
                    sx={{
                      pt: '10px',
                      pb: '16px',
                      px: { xs: '10px', sm: '15px', md: '50px' },
                      textAlign: 'left',
                    }}
                  >
                    {item?.locations?.map((location, index) => (
                      <Box key={index}>
                        <Link href={location?.link}>
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: '14px',
                              py: { xs: '5px', sm: '6px' },
                              lineHeight: '16.94px',
                              fontWeight: 500,
                              color: '#666666',
                            }}
                          >
                            {location?.title}
                          </Typography>
                        </Link>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            pb: '26px',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Button onClick={scrollToTop}>
            <Image
              src="/images/bgs/GototheTop.svg"
              width={80}
              height={80}
              alt={'Images'}
            />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PopularLocations;
