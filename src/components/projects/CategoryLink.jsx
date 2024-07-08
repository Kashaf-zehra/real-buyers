import { Container, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const CategoryLink = ({ category, link, linkText }) => {
  return (
    <Container
      sx={{ display: 'flex', justifyContent: 'space-between', py: '15px' }}
    >
      <Typography
        sx={{
          fontSize: '25px',
          fontWeight: 500,
          lineHeight: '30px',
          textTransform: 'capitalize',
        }}
      >
        {category}
      </Typography>
      {link && linkText ? (
        <Link href={link}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '24px',
              color: '#1176AD',
              textDecoration: 'underline',
            }}
          >
            {linkText}
          </Typography>
        </Link>
      ) : null}
    </Container>
  );
};

export default CategoryLink;
