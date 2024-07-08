import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import Image from 'next/image';

const LoginWithGoogle = ({
  buttonLabel,
  loginButton,
  label,
  accountCreationMessage,
  onSigninClick,
  loginClick,
  handleGoogleLogin,
}) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          style={{
            background: '#FB631C',
            width: '100px',
            borderRadius: '5px',
            color: 'white',
            '&:hover': {
              background: '#FF631C',
            },
          }}
          onClick={loginClick}
        >
          {buttonLabel}
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <hr
          style={{
            display: { xs: 'none', md: 'flex' },
            width: '135px',
            border: '1px #A5A5A5 solid',
          }}
        ></hr>
        <Typography
          sx={{
            color: '#909394',
          }}
        >
          {' '}
          Or
        </Typography>
        <hr
          style={{
            display: { xs: 'none', md: 'flex' },
            width: '135px',
            border: '1px #A5A5A5 solid',
          }}
        ></hr>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          sx={{
            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
            width: { xs: '200px', md: '250px' },
            padding: { xs: '8px', md: '10px' },
            fontSize: { xs: '12px', sm: '15px', md: '14px' },
            fontWeight: 500,
            gap: '12px',
            color: '#909394',
            borderRadius: 2,
            textTransform: 'math-auto',
          }}
          onClick={handleGoogleLogin}
        >
          <Image
            src="/images/signup_page/google.svg"
            width={24}
            height={24}
            alt={'google'}
          />
          {loginButton}
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: 400,
          gap: '5px',
        }}
      >
        <Typography
          sx={{
            color: '#333333',
            fontSize: { xs: '13px', md: '16px' },
          }}
        >
          {accountCreationMessage}
        </Typography>
        <Typography
          style={{
            color: '#FB631C',
            fontWeight: 400,
            fontSize: { xs: '12px', md: '16px' },
            cursor: 'pointer',
          }}
          onClick={() => {
            onSigninClick();
          }}
        >
          {label}
        </Typography>
      </Box>
    </>
  );
};
export default LoginWithGoogle;
