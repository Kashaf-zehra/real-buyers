import React from 'react';
import { Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Price = ({ price, link, pkr, message, reach }) => {
  return (
    <>
      <Typography
        color="primaryy"
        sx={{
          fontSize: { xs: '20px', md: '25px' },
          fontWeight: 700,
          wordBreak: 'break-word',
          paddingBottom: '10px',
        }}
      >
        {pkr} {price}
      </Typography>
      <Typography
        color="primaryy"
        sx={{
          fontSize: { xs: '12px', md: '16px' },
          fontWeight: 400,
        }}
      >
        {reach}
      </Typography>
      <Link href={link}>
        <Button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#FB631C',
            width: '100%',
            height: '60px',
            fontSize: '24px',
            fontWeight: 500,
            color: 'white',
            gap: '10px',
            borderRadius: 10,
          }}
        >
          <Image
            src="/images/agent-profile/msgicon.svg"
            width={30}
            height={26}
            alt={'Images'}
          />
          <Typography
            sx={{
              fontSize: { xs: '15px', md: '25px' },
            }}
          >
            {message}
          </Typography>
        </Button>
      </Link>
    </>
  );
};
export default Price;
