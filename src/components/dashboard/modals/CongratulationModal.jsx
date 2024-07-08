import React from 'react';
import { Modal, Button, Box, Typography } from '@mui/material';

import { VERIFICATION_OTP } from '@/src/constants/Verfication_Modal';
import Image from 'next/image';

const CongratsModal = ({ open, onCloseModal }) => {
  return (
    <>
      <Modal open={open} onClose={onCloseModal}>
        <Box
          sx={{
            width: { xs: '100%', sm: '50%', md: '500px' },
            background: '#E8F6FF',
            borderRadius: '27px',
            margin: 'auto',
            height: ' 353px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            flexWrap: 'nowrap',
            marginTop: '210px',
            paddingBottom: '10px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '180px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '& img': {
                width: '200px',
                animation: '$animateFrames 5s infinite',
                alignSelf: 'center',
              },
              '@keyframes animateFrames': {
                '0%': { transform: 'translateX(0%)' },
                '25%': { transform: 'translateX(-100%)' },
                '50%': { transform: 'translateX(-200%)' },
                '75%': { transform: 'translateX(-300%)' },
                '100%': { transform: 'translateX(0%)' },
              },
            }}
          >
            <Image
              src="/images/congrats/congrats.gif"
              alt={'congrats'}
              height={150}
              width={150}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              gap: '10px',
              height: '200px',
            }}
          >
            <Typography
              sx={{
                fontWeight: '600px',
                fontSize: '25px',
              }}
            >
              {VERIFICATION_OTP.congrats}
            </Typography>
            <Typography
              sx={{
                fontWeight: '400px',
                fontSize: '16px',
              }}
            >
              {VERIFICATION_OTP.verifiedNum}
            </Typography>
            <Button
              style={{
                background: '#126FAA',
                color: 'white',
                fontWeight: '500px',
                fontSize: '20px',
                width: '150px',
                borderRadius: '10px',
              }}
              onClose={onCloseModal}
            >
              {VERIFICATION_OTP.continue}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default CongratsModal;
