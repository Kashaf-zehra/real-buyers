import Link from 'next/link';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ChiperBack = ({ backText, backLink, chipperText }) => {
  return (
    <>
      <Container sx={{ py: '15px' }}>
        <Box py={{ xs: '15px', sm: '20px', md: '25px', lg: '30px' }}>
          <Link href={backLink}>
            <Typography
              sx={{
                fontSize: '15px',
                fontWeight: 500,
                lineHeight: '18px',
                color: '#FB631C',
              }}
            >
              <ArrowBackIosIcon sx={{ width: '17px', height: '17px' }} />{' '}
              {backText}
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '4px',
              px: '10px',
              border: '1px solid #E4E4E4',
              color: '#666666',
              backgroundColor: '#fff',
            }}
          >
            <Typography
              sx={{
                lineHeight: '40px',
                fontSize: { xs: '12px', sm: '12px', md: '15px', lg: '18px' },
                fontWeight: 500,
                pr: '2px',
              }}
            >
              {chipperText}
            </Typography>
            <Link href={'/projects'} sx={{ marginLeft: 'auto' }}>
              <CloseSharpIcon
                sx={{
                  color: '#666666',
                  width: { xs: '12px', sm: '15px', md: '20px', lg: '24px' },
                  height: { xs: '18px', sm: '20px', md: '22px', lg: '24px' },
                }}
              />
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ChiperBack;
