import React from 'react';
import { Box } from '@mui/system';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Navigation } from 'swiper/modules';

const VideoSlider = ({ videosSlider, modalWidth }) => {
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
        {videosSlider?.map((video, index) => (
          <Box key={index}>
            <SwiperSlide
              sx={{
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  width: `${modalWidth}px`,
                  height: { xs: 'auto', lg: '569px' },
                  borderRadius: '30px',
                }}
              >
                <video style={{ width: '100%', height: '100%' }} controls>
                  <track
                    src="captions.vtt"
                    kind="captions"
                    label="English"
                    default
                  />
                  <source src={URL?.createObjectURL(video)} />
                </video>
              </Box>
            </SwiperSlide>
          </Box>
        ))}
        <Box
          className=" custom-swiper-button-next"
          sx={{
            position: 'absolute',
            right: 45,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            cursor: 'pointer',
          }}
        >
          <Image
            src={'/images/modalNextArrow.svg'}
            width={40}
            height={60}
            alt={'icon'}
          />
        </Box>
        <Box
          className=" custom-swiper-button-prev"
          sx={{
            position: 'absolute',
            left: 45,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            cursor: 'pointer',
          }}
        >
          <Image
            src={'/images/modalPrevArrow.svg'}
            width={40}
            height={60}
            alt={'icon'}
          />
        </Box>
      </Swiper>
    </Box>
  );
};

export default VideoSlider;
