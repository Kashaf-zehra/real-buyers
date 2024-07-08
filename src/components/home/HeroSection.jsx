'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { Bounce } from 'react-awesome-reveal';
import HeroSlider from './HeroSlider';
import {
  HERO_SECTION_CONTENT,
  HERO_SECTION_IMAGES,
} from '@/src/constants/Constants';

const HeroSection = () => {
  const { heading, logo } = HERO_SECTION_CONTENT;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          height: {
            xs: '250px',
            sm: '350px',
            md: '500px',
            lg: '600px',
            xl: '678px',
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            zIndex: 2,
            width: {
              xs: 'auto',
              sm: '150px',
              md: '200px',
              lg: '239px',
              xl: '239px',
            },
            height: {
              xs: '100px',
              sm: '150px',
              md: '200px',
              lg: '239px',
              xl: '239px',
            },
            top: { xs: 80, sm: 110, md: 150, lg: 190, xl: 200 },
          }}
          src={logo}
          component={'img'}
        ></Box>
        <Typography
          sx={{
            px: { xs: '20px', sm: '0px' },
            '@media (min-width: 400px) and (max-width: 599px)': {
              px: '15%',
            },
            pt: '10px',
            zIndex: 2,
            position: 'absolute',
            width: {
              xs: 'auto',
              sm: '440px',
              md: '610px',
              lg: '900px',
              xl: '890px',
            },
            top: { xs: 165, sm: 250, md: 340, lg: 420, xl: 430 },
            fontSize: {
              xs: '15px',
              sm: '20px',
              md: '28px',
              lg: '35px',
              xl: '40px',
            },
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
            fontWeight: { xs: 900 },
          }}
          variant="h2"
          component={'h2'}
          color={'primary'}
          data-aos="fade-right"
        >
          {heading}
        </Typography>
        <Box
          sx={{
            width: {
              xs: '40px',
              sm: '60px',
              md: 'auto',
              lg: 'auto',
              xl: 'auto',
            },
            zIndex: 2,
            justifyContent: 'space-around',
            display: 'flex',
            position: 'absolute',
            gap: 2,
            top: { xs: 240, sm: 340, md: 460, lg: 530, xl: 560 },
          }}
        >
          <Bounce direction="left" triggerOnce>
            <Link href="/signup/">
              {' '}
              <Button
                sx={{
                  width: {
                    xs: '100px',
                    sm: '120px',
                    md: '120px',
                    lg: '120px',
                    xl: '120px',
                  },
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: 'normal',
                  height: { xs: '31px', sm: '35px', lg: '40px', xl: '40px' },
                  textAlign: 'start',
                  '&:hover': {
                    background: '#fff !important',
                    border: '1px solid #FB631C',
                    color: '#FB631C ',
                  },
                }}
                variant="primary"
              >
                {HERO_SECTION_CONTENT.buyer}
              </Button>
            </Link>
          </Bounce>
          <Bounce direction="right" triggerOnce>
            <Link href="/signup/">
              {' '}
              <Button
                sx={{
                  width: {
                    xs: '100px',
                    sm: '120px',
                    md: '120px',
                    lg: '120px',
                    xl: '120px',
                  },
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: 'normal',
                  height: { xs: '31px', sm: '35px', lg: '40px', xl: '40px' },
                  background: '#FB631C',
                  '&:hover': {
                    background: '#fff !important',
                    border: '1px solid #FB631C',
                    color: '#FB631C ',
                  },
                }}
                variant="primary"
              >
                {HERO_SECTION_CONTENT.seller}
              </Button>
            </Link>
          </Bounce>
        </Box>
        <HeroSlider
          effect={'fade'}
          pagination={true}
          delay={1500}
          SlidesData={HERO_SECTION_IMAGES}
        />
      </Box>
    </>
  );
};

export default HeroSection;
