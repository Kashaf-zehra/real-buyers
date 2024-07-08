'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Box, Pagination } from '@mui/material';
import { A11y, Navigation } from 'swiper/modules';

const AdMediaSlider = ({ media, mediaType }) => {
  const swiperSettings = {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    module: [Navigation, Pagination, A11y],
    breakpoints: {
      1920: {
        slidesPerView: 2,
        // spaceBetween: 1,
      },
      960: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      700: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 2,
      },
      280: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <>
      <Swiper {...swiperSettings}>
        {mediaType == 'images' &&
          media?.map((image, i) => (
            <SwiperSlide key={i}>
              <Box
                component={'img'}
                src={
                  image
                    ? URL?.createObjectURL(new Blob([image]))
                    : '/images/PropertyImg.png'
                }
                alt={`Uploaded ${i}`}
                quality={'100'}
                sx={{
                  minWidth: '300px',
                  minHeight: '200px',
                  maxWidth: '300px',
                  maxHeight: '200px',
                  width: 'auto',
                  height: 'auto',
                  '@media(min-width:350px) and (max-width:450px)': {
                    mx: 'auto',
                  },
                  '@media(min-width:280px) and (max-width:349px)': {
                    maxWidth: '100%',
                    minWidth: '100%',
                    minHeight: '160px',
                    maxHeight: '160px',
                    mx: 'auto',
                  },
                }}
              />
            </SwiperSlide>
          ))}
        {mediaType == 'videos' &&
          media?.map((video, i) => (
            <SwiperSlide key={i}>
              <Box
                sx={{
                  width: '300px',
                  height: '200px',
                  '@media(min-width:280px) and (max-width:450px)': {
                    maxWidth: '100%',
                    minWidth: '100%',
                    minHeight: '200px',
                    mx: 'auto',
                  },
                }}
              >
                <video
                  style={{ width: '100%', height: '100%' }}
                  key={i}
                  controls
                >
                  <track
                    src="captions.vtt"
                    kind="captions"
                    label="English"
                    default
                  />
                  <source
                    src={video && URL?.createObjectURL(new Blob([video]))}
                  />
                </video>
              </Box>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default AdMediaSlider;
