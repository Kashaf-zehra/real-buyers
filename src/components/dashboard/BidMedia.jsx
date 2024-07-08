'use client';
import React, { useState } from 'react';
import { Typography, Button, Modal, Box } from '@mui/material';
import Image from 'next/image';

import BidSlider from './BidSlider';

import MobleScreenSlider from './MobleScreenSlider';
import VideoSlider from './VideoSlider';
import DesktopScreenSlider from './DesktopScreenSlider';
import { BIDDINGS } from '@/src/constants/Preview_Data';

const BidMedia = ({ title, media, mediaType, px, pt, pb }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {mediaType === 'images' ? (
          <>
            <Box
              className="fullScreen"
              sx={{
                backgroundColor: '#fff',
                width: '1050px',
                height: '569px',
                borderRadius: '30px',
                margin: 'auto',
                padding: '0px 80px',
              }}
            >
              <Box sx={{ width: '100%', height: '100%' }}>
                <DesktopScreenSlider
                  imageSlider={media}
                  handleClose={handleClose}
                />
              </Box>
            </Box>
            <Box
              className="MobileScreen"
              sx={{
                position: 'relative',
                width: { xs: '100%' },
                height: 'auto !important',
                mx: '0px auto',
              }}
            >
              <MobleScreenSlider
                imageSlider={media}
                modalWidth={700}
                handleClose={handleClose}
              />
            </Box>
          </>
        ) : (
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', md: '53%' },
              mx: '0px auto',
            }}
          >
            <Button
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: -15,
                top: -70,
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
            <Box
              sx={{
                borderRadius: '30px',
              }}
            >
              <VideoSlider
                videosSlider={media}
                modalWidth={1050}
                modalHeight={569}
              />
            </Box>
          </Box>
        )}
      </Modal>
      <Box
        sx={{
          px: px ? px : 4,
          pt: pt ? pt : 3,
          pb: pb ? pb : 8,
          width: '100%',
          borderBottom: '1px solid #E4E4E4',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            mb: media && media.length <= 3 ? '20px' : '0px',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#000',
              fontSize: '20px',
              fontWeight: '500',
            }}
          >
            {title}
          </Typography>

          {media && media.length > 3 && (
            <Button
              sx={{
                mx: '4px',
                fontWeight: 600,
                width: { xs: '150px', md: '150px' },
                height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
                color: '#FB631C',
                marginBottom: '15px',
                marginTop: { xs: '20px', md: '0px' },
                '&:hover': {
                  color: '#fff',
                },
                borderRadius: '50px',
              }}
              variant="outlined"
              onClick={handleOpen}
            >
              {BIDDINGS.ViewAllbutton.title}
            </Button>
          )}
        </Box>
        <BidSlider media={media} mediaType={mediaType} />
      </Box>
    </>
  );
};

export default BidMedia;
