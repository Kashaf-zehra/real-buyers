'use client';
import React from 'react';
import { Box, Container } from '@mui/material';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Heading from './Heading';
import { FEATURED_HEADINGS } from '@/src/constants/Home';
// import Link from 'next/link';

const OurHomePartners = ({ data }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: 'linear',
    pauseOnHover: false,
    animationDelay: '2s',
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Container
      sx={{
        pt: { xs: '40px', sm: '50px', md: '60px', lg: '70px' },
        pb: { xs: '40px', md: '50px' },
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          pb: '30px',
        }}
      >
        <Heading heading={FEATURED_HEADINGS.homePartners} />
      </Box>
      <Box sx={{ padding: '20px', background: '#f5f6fb' }}>
        <Slider {...sliderSettings}>
          {data?.map((partner) => (
            <Box key={partner?.id} sx={{ padding: '10px' }}>
              <Box
                sx={{
                  background: '#fff',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* <Link href={`/partners/${partner?.id}`}> */}
                <Image
                  src={partner?.image}
                  alt={partner?.name}
                  title={partner?.name}
                  width={400}
                  height={100}
                />
                {/* </Link> */}
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default OurHomePartners;
