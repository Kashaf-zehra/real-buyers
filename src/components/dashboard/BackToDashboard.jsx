import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BackToDashboard = ({ buttonLabel, link }) => {
  return (
    <>
      <Link href={link}>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            pl: '3px',
            pt: '3px',
            '@media (min-width: 960px) and (max-width: 1439px)': {
              ml: '5%',
            },
          }}
        >
          <ArrowBackIosIcon sx={{ color: '#FB631C' }} />
          <Typography
            sx={{
              color: '#FB631C',
              fontSize: '15px',
              fontWeight: 500,
              lineHeight: '18.15px',
            }}
          >
            {buttonLabel}
          </Typography>
        </Box>
      </Link>
    </>
  );
};

export default BackToDashboard;
