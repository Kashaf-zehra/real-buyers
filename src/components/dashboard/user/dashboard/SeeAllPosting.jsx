import React from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';

const SeeAllPosting = ({ title, link }) => {
  return (
    <>
      <Link href={`${link}`}>
        <Typography
          sx={{
            Weight: 500,
            fontSize: { xs: '17px', sm: '20px' },
            lineHeight: '24.2px',
            color: '#126FAA',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
            background: 'none',
            '&:hover': {
              background: 'none',
              textDecoration: 'underline',
            },
          }}
        >
          {title}
        </Typography>
      </Link>
    </>
  );
};

export default SeeAllPosting;
