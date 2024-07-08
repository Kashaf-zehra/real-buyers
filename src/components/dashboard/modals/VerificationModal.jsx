import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import Image from 'next/image';

import {
  VERIFICATION_CODE,
  VERIFICATION_OTP,
} from '@/src/constants/Verfication_Modal';
import VerificationCode from './VerificationCode';

const VerificationModal = ({ open, onCloseModal }) => {
  return (
    <>
      <Modal open={open} onClose={onCloseModal}>
        <Box
          sx={{
            width: { xs: '100%', sm: '50%', md: '613px' },
            background: '#E8F6FF',
            borderRadius: '27px',
            margin: 'auto',
            height: { xs: '600px', md: '422px' },
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            flexWrap: 'nowrap',
            marginTop: '210px',
            padding: '50px',
            paddingTop: '20px',
            flexDirection: 'column-reverse',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              gap: '15px',
              height: { xs: '500px', md: '358px' },
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: '25px',
                lineHeight: '30.26px',
              }}
            >
              {VERIFICATION_OTP.verificationCode}
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '20px',
                color: '#666',
                lineHeight: '24.2px',
              }}
            >
              {VERIFICATION_OTP.code}
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: '21px',
                  color: '#666',
                  lineHeight: '25.41px',
                }}
              >
                {VERIFICATION_OTP.placeHolderNumber}
              </Typography>
            </Typography>
            <VerificationCode
              receivedCode={VERIFICATION_OTP.otpCode}
              otpReceivedCode={VERIFICATION_CODE.codeOTP}
            />
            <Box sx={{ display: 'flex', alignSelf: 'flex-start' }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '16.94px',
                  textAlign: 'center',
                  color: '#666666',
                }}
              >
                {VERIFICATION_OTP.attemptsFive}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '16.94px',
                  textAlign: 'center',
                  color: '#666666',
                }}
              >
                {VERIFICATION_OTP.attemptsTwo}
              </Typography>
            </Box>
            <hr
              style={{
                width: '100%',
                background: '#979797',
                border: '0.5px solid #979797',
              }}
            />
            <Box sx={{ display: 'flex', alignSelf: 'flex-start' }}>
              <Typography
                sx={{
                  color: '#666666',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '16.94px',
                  textAlign: 'center',
                }}
              >
                {VERIFICATION_OTP.codeOtp}

                <span
                  style={{
                    color: '#126FAA',
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '19.36px',
                  }}
                >
                  {VERIFICATION_OTP.resendCode}
                </span>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              marginRight: '-10px',
            }}
          >
            <Image
              src={'/images/modal/close.svg'}
              width={28}
              height={28}
              alt={'close'}
              onClick={onCloseModal}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default VerificationModal;
