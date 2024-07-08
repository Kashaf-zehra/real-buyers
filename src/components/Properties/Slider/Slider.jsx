'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import { Grid } from '@mui/material';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

const Slider = ({ propertySlider }) => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} md={11}>
          <Swiper
            effect={'fade'}
            navigation={true}
            modules={[EffectFade, Navigation]}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '15px',
            }}
          >
            {propertySlider?.images.slice(1).map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item}
                  alt={`Slide ${index + 1}`}
                  width={970}
                  height={550}
                  sx={{
                    objectFit: 'cover',
                    borderRadius: '20px',
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </>
  );
};
export default Slider;
