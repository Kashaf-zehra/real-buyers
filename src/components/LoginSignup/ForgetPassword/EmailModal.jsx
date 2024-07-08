'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Modal, Button, Box, Typography, Alert } from '@mui/material';
import Image from 'next/image';

import { LOGIN_FORM, LOGIN_ROUTERS } from '@/src/constants/Login';

const CheckEmailModal = ({ open, onClose, email, handleClick }) => {
  const router = useRouter();
  const handleLogin = () => {
    router.push(LOGIN_ROUTERS.signin);
  };
  const [isToastOpen, setIsToastOpen] = useState(false);
  const handleToast = () => {
    setIsToastOpen(true);

    setTimeout(() => {
      setIsToastOpen(false);
    }, 5000);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: '50%', md: '500px' },
            margin: 'auto',
            height: ' 400px',
            background: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', sm: '50%', md: '500px' },
              margin: 'auto',
              height: ' 400px',
              background: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: { xs: '80px', md: '70px' },
                marginBottom: '116px',
              }}
            >
              <Image
                src="/images/signup_page/mailbox.svg"
                width={50}
                height={50}
                alt="mailbox"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '270px',
                gap: '10px',
              }}
            >
              <Typography
                sx={{
                  fontWeight: '400px',
                  fontSize: '24px',
                }}
              >
                {LOGIN_FORM.loginCard.checkEmail}{' '}
              </Typography>
              <Typography
                sx={{
                  fontWeight: '400px',
                  fontSize: '14px',
                }}
              >
                {LOGIN_FORM.loginCard.resetPassword}
              </Typography>
              <Typography
                sx={{
                  fontWeight: '400px',
                  fontSize: '12px',
                }}
              >
                {email}
              </Typography>
              <Button
                style={{
                  background: '#FF631C',
                  color: 'white',
                  fontWeight: '500px',
                  fontSize: '14px',
                  width: '98px',
                  height: '29px',
                  borderRadius: '5px',
                  marginTop: '25px',
                }}
                onClick={() => {
                  handleClick();
                  handleToast();
                }}
              >
                {LOGIN_FORM.loginCard.resend}
              </Button>
              {isToastOpen && (
                <Alert variant="filled" severity="success">
                  {LOGIN_FORM.loginCard.emailSent}
                </Alert>
              )}
              <Button
                sx={{
                  fontWeight: '400px',
                  fontSize: '12px',
                  color: '#126FAA',
                  padding: 0,
                  textTransform: 'math-auto',
                  marginTop: '50px',
                  textDecoration: 'underline',
                }}
                onClick={() => {
                  handleLogin();
                }}
              >
                <Image
                  src="/images/modal/lessthan.svg"
                  width={18}
                  height={18}
                  alt="lessthan"
                />
                {LOGIN_FORM.loginCard.backSignin}
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default CheckEmailModal;
