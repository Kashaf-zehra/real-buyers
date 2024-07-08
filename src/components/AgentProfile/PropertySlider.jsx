'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fade } from 'react-awesome-reveal';

import { Box, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from 'next/link';

import SliderCardTitle from './Slider/SliderCardTitle';
import SliderCardLocation from './Slider/SliderCardLocation';
import SliderCardPrice from './Slider/SliderCardPrice';
import SliderCardSeeDetails from './Slider/SliderCardSeeDetails';
import SliderCardIcons from './Slider/SliderCardIcons';

const PropertySlider = ({ data }) => {
  var settings = {
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          adaptiveHeight: true,
          dots: false,
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          adaptiveHeight: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {data?.slice(0, 10)?.map((item, index) => {
          return (
            <Fade key={index} direction="right" duration={500}>
              <Card
                sx={{
                  maxWidth: 315,
                  '&:hover': {
                    boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.25)',
                  },
                }}
                key={item}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 18,
                    top: '10px',
                    right: '0px',
                    position: 'absolute',
                    backgroundImage: `url('/images/amenities/location.svg')`,
                    backgroundSize: 'contain',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 10,
                  }}
                >
                  {item?.city || 'city'}
                </Box>
                <Link href={`/projects/${item?.property_id}`}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={item?.images[0]}
                    alt={'Paella dish'}
                  />
                </Link>
                <CardContent
                  sx={{ padding: { xs: '5px', sm: '10px', md: '16px' } }}
                >
                  <Box>
                    <Grid container rowSpacing={1}>
                      <Grid item xs={12}>
                        <SliderCardTitle link={item} />
                      </Grid>
                      <Grid item xs={12}>
                        <SliderCardLocation location={item?.city || 'city'} />
                      </Grid>
                      <Grid item xs={12}>
                        <SliderCardPrice
                          price={item?.amount}
                          unit={item?.amountCurrency}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <Grid container rowSpacing={2} sx={{ marginTop: 0 }}>
                    <SliderCardIcons link={item} />
                  </Grid>
                </CardContent>
                <Grid container>
                  <SliderCardSeeDetails link={item} />
                </Grid>
              </Card>
            </Fade>
          );
        })}
      </Slider>
    </>
  );
};
export default PropertySlider;
