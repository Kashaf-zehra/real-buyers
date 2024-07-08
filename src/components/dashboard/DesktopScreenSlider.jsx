'use client';
import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const DesktopScreenSlider = ({ imageSlider, handleClose }) => {
  return (
    <Box
      className="modal-slider"
      sx={{ textAlign: 'center', position: 'relative' }}
    >
      <Button
        onClick={handleClose}
        sx={{ position: 'absolute', right: -60, top: 20, cursor: 'pointer' }}
      >
        <Image
          src={'/images/biddings/images/close.png'}
          width={30}
          height={30}
          alt={'close'}
        />
      </Button>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        className="swiper_container"
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {imageSlider?.map((image, index) => (
          <Box key={index}>
            <SwiperSlide>
              <Image
                src={URL?.createObjectURL(image)}
                width={1000}
                height={1000}
                alt={'slide_image'}
                layout="responsive"
              />
            </SwiperSlide>
          </Box>
        ))}
      </Swiper>
      <Box
        className="custom-swiper-button-next"
        sx={{
          position: 'absolute',
          right: -60,
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          zIndex: ' 1 !important',
        }}
      >
        <Image
          src={'/images/modalNextArrow.svg'}
          width={40}
          height={0}
          alt={'icon'}
        />
      </Box>
      <Box
        className="custom-swiper-button-prev"
        sx={{
          position: 'absolute',
          left: -60,
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          zIndex: '1000 !important',
        }}
      >
        <Image
          src={'/images/modalPrevArrow.svg'}
          width={40}
          height={40}
          alt={'icon'}
          sx={{
            zIndex: '1000 !important',
          }}
        />
      </Box>
    </Box>
  );
};

export default DesktopScreenSlider;
