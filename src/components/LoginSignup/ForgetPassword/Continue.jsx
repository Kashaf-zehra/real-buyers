import React from 'react';
import { Button } from '@mui/material';
import Image from 'next/image';

import { LOGIN_FORM } from '@/src/constants/Login';

const Continue = ({
  handleBackToLogin,
  handleContinue,
  checkPasswordMatch,
}) => {
  return (
    <>
      <Button
        style={{
          display: 'flex',
          alignSelf: 'center',
          background: '#FB631C',
          width: '100px',
          borderRadius: '5px',
          color: 'white',
          '&:hover': {
            background: '#FF631C',
          },
        }}
        onClick={() => {
          handleContinue();
          checkPasswordMatch();
        }}
      >
        {LOGIN_FORM.loginCard.continue}
      </Button>

      <Button
        sx={{
          fontWeight: '400px',
          fontSize: '12px',
          color: '#126FAA',
          padding: 0,
          textTransform: 'math-auto',
          marginTop: '50px',
          textDecoration: 'underline',
          display: 'flex',
          alignSelf: 'baseline',
          alignItems: 'center',
        }}
        onClick={() => {
          handleBackToLogin();
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
    </>
  );
};
export default Continue;
