import React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Navigation } from 'swiper/modules';

const MobleScreenSlider = ({ imageSlider, modalWidth, handleClose }) => {
  return (
    <Box id="slider" sx={{ position: 'relative' }}>
      <Swiper
        effect={'fade'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        className="mySwiper"
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectFade, Pagination, Navigation]}
      >
        {imageSlider?.map((image, index) => (
          <Box key={index}>
            <SwiperSlide
              sx={{
                overflow: 'hidden',
              }}
            >
              <Box
                style={{
                  width: `${modalWidth}px`,
                  height: 'auto',
                  padding: '40px',
                }}
              >
                <Image
                  src={URL?.createObjectURL(image)}
                  width={1000}
                  height={1000}
                  alt={'slide_image'}
                  layout="responsive"
                />
              </Box>
            </SwiperSlide>
          </Box>
        ))}
        <Box
          className=" custom-swiper-button-next"
          sx={{
            position: 'absolute',
            right: { xs: 5, sm: '10%' },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            cursor: 'pointer',
          }}
        >
          <Image
            src={'/images/modalNextArrow.svg'}
            width={30}
            height={30}
            alt={'nextArrow'}
          />
        </Box>
        <Box
          className=" custom-swiper-button-prev prvBtn"
          sx={{
            position: 'absolute',
            left: { xs: 5, sm: '10%' },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            cursor: 'pointer',
          }}
        >
          <Image
            src={'/images/modalPrevArrow.svg'}
            width={30}
            height={30}
            alt={'PrevArrow'}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            right: { xs: -10, sm: '8%' },
            top: 38,
            zIndex: 1,
            cursor: 'pointer',
          }}
        >
          <Button
            onClick={handleClose}
            sx={{
              cursor: 'pointer',
            }}
          >
            <Image
              src={'/images/biddings/images/close.png'}
              width={30}
              height={30}
              alt={'close'}
            />
          </Button>
        </Box>
      </Swiper>
    </Box>
  );
};

export default MobleScreenSlider;
