'use client';
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { Box, Typography } from '@mui/material';

import {
  LOGIN_FORM,
  LOGIN_FORM_DATA,
  LOGIN_ROUTERS,
} from '@/src/constants/Login';
import Continue from '../ForgetPassword/Continue';
import PasswordAndConfirmFields from '../Login/PasswordAndConfirmField';
import { resetPassword } from '@/src/utils/apis/auth/resetPassword';

const ResetPassword = () => {
  const [formData, setFormData] = useState(LOGIN_FORM_DATA?.passwordFields);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFieldToggle = (fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: !formData[fieldName],
    });
  };

  const router = useRouter();
  const searchParams = useSearchParams();
  const passwordsMatch = formData?.password === formData?.confirmPassword;

  const checkPasswordMatch = () => {
    if (passwordsMatch) {
      alert(LOGIN_FORM.loginCard.passwordMatch);
      router.push(LOGIN_ROUTERS.signin);
    } else {
      alert(LOGIN_FORM.loginCard.passwordDontMatch);
    }
  };

  const backToSignin = () => {
    router.push(LOGIN_ROUTERS.signin);
  };

  const { mutate } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      router.push(LOGIN_ROUTERS.signin);
    },
  });

  const handleRestPassword = () => {
    mutate({ password: formData.password, token: searchParams.get('token') });
  };

  return (
    <Box
      sx={{
        width: { xs: '90%', md: '500px' },
        height: { xs: '400px', md: '600px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '-4px -4px 11px rgba(0, 0, 0, 0.15)',
        borderRadius: '10px',
        background: '#fff',
        margin: 'auto',
        zIndex: 2,
        '@media (max-width: 1286px)': {
          width: '400px',
        },
        '@media (max-width: 400px)': {
          width: '90% ',
        },
      }}
    >
      <Box
        sx={{
          width: { xs: '70%', md: '320px' },
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          gap: { xs: '7px', md: '15px' },
          paddingTop: { xs: '0px', md: '40px' },
        }}
      >
        <Typography
          sx={{
            color: '#FF631C',
            fontSize: { xs: '18px', md: '30px' },
            fontWeight: 600,
          }}
        >
          {LOGIN_FORM.resetPasswordCard.resetPassword}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '12px', md: '16px' },
            fontWeight: 400,
          }}
        >
          {LOGIN_FORM.resetPasswordCard.createNewPassword}
        </Typography>
        <PasswordAndConfirmFields
          handleFieldToggle={handleFieldToggle}
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          passwordsMatch={passwordsMatch}
        />
        <Continue
          checkPasswordMatch={checkPasswordMatch}
          handleBackToLogin={backToSignin}
          handleContinue={handleRestPassword}
        />
      </Box>
    </Box>
  );
};
export default ResetPassword;
