'use client';
import React, { useState } from 'react';
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { Typography, Box } from '@mui/material';
import { useMutation } from '@tanstack/react-query';

import { saveSignupData, setLoggedIn } from '@/src/redux/slices/auth/authSlice';
import {
  LOGIN_FORM,
  LOGIN_FORM_DATA,
  LOGIN_ROUTERS,
  PASSWORD_ALERT,
} from '@/src/constants/Login';
import LoginWithGoogle from '../Login/LoginWithGoogle';
import FormContainer from '../Login/LoginForm';
import { signup } from '@/src/utils/apis/auth/signup';
import { loginWithGoogle } from '@/src/utils/apis/auth/loginWithGoogle';

const SignupCard = () => {
  const [formData, setFormData] = useState(LOGIN_FORM_DATA?.initialFormData);
  const [contactNumber, setContactNumber] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const handleInputContactNumber = (e) => {
    const newContactNumber = e.target.value;

    if (newContactNumber.length <= LOGIN_FORM.signupForm.maxLength) {
      setContactNumber(newContactNumber);
      setFormData({
        ...formData,
        [e.target.name]: newContactNumber,
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleAutoCompleteInputChange = (event, newValue) => {
    const fieldName = LOGIN_FORM.signupForm.userType;
    setFormData({
      ...formData,
      [fieldName]: newValue ? [newValue.value] : [],
    });
  };
  const signupClick = () => {
    if (
      formData[LOGIN_FORM.password] !== formData[LOGIN_FORM.confirmPassword]
    ) {
      alert(PASSWORD_ALERT);
    }
    mutate({
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      password: formData.password,
      mobile_number: formData.contactNumber,
      role: 'user',
    });
    dispatch(saveSignupData(formData));
  };

  const { mutate } = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      Cookie.set('token', data.token);
      Cookie.set('userType', data.userType);
      dispatch(setLoggedIn(data));
      if (data.userType === 'user') {
        router.push('/user/dashboard');
      } else if (data.userType === 'agent') {
        router.push('/agent/live-bidding');
      }
    },
  });

  const { mutate: googleLogin } = useMutation({
    mutationFn: loginWithGoogle,
    onSuccess: (data) => {
      // Invalidate and refetch
      console.log('success', data);
    },
  });

  const handleGoogleLogin = () => {
    googleLogin();
  };

  return (
    <>
      <Box
        sx={{
          width: { xs: '90%', md: '500px' },
          height: { xs: '650px', md: '580px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '-4px -4px 11px rgba(0, 0, 0, 0.15)',
          borderRadius: 2,
          background: 'white',
          marginTop: '38px',
          zIndex: 2,
          '@media (max-width: 1286px)': {
            width: '400px',
          },
          '@media (max-width: 400px)': {
            width: '90%',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '70%', md: '386px' },
            height: '562px',
            gap: { xs: '5px', md: '8px' },
            paddingTop: '40px',
          }}
        >
          <Typography
            sx={{
              color: '#FF631C',
              fontSize: '20px',
              fontWeight: 600,
            }}
          >
            {LOGIN_FORM.loginCard.createAccount}
          </Typography>
          <Typography
            sx={{
              color: '#333333',
              fontSize: '16px',
              fontWeight: 400,
            }}
          >
            {LOGIN_FORM.loginCard.quickEasy}
          </Typography>
          <FormContainer
            isLoginForm={false}
            formData={formData}
            contactNumber={contactNumber}
            handleInputContactNumber={handleInputContactNumber}
            handleInputChange={handleInputChange}
            handleAutoCompleteInputChange={handleAutoCompleteInputChange}
          />
          <LoginWithGoogle
            buttonLabel={LOGIN_FORM.signupForm.signup}
            label={LOGIN_FORM.signupForm.signin}
            accountCreationMessage={LOGIN_FORM.loginCard.label}
            loginButton={LOGIN_FORM.loginCard.googleLogin}
            onSigninClick={() => {
              console.log('signin');
              router.push(LOGIN_ROUTERS.signin);
            }}
            loginClick={signupClick}
            handleGoogleLogin={handleGoogleLogin}
          />
        </Box>
      </Box>
    </>
  );
};
export default SignupCard;
