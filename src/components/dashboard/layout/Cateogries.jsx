import React from 'react';
import { Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { MY_CATEGORIES } from '@/src/constants/Nav_Data';
import Image from 'next/image';

const Cateogries = ({ categories }) => {
  return (
    <Box
      sx={{
        mt: 2,
        mb: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '65%',
          maxWidth: '210px',
          minWidth: '180px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            padding: '0px 0px 0px 31px',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: '#000',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: 'normal',
              my: 1,
            }}
          >
            {MY_CATEGORIES}
          </Typography>
        </Box>
        <Box
          sx={{
            padding: '0px 0px 0px 20px',
          }}
        >
          <Image
            src="/images/Live-bidding-icons/category.svg"
            width={30}
            height={30}
            alt={'icons'}
          />
        </Box>
      </Box>
      {categories.map((items, index) => {
        return (
          <Grid item xs={12} key={index}>
            <Typography
              variant="body1"
              sx={{
                paddingLeft: '31px',
                paddingBottom: '7px',
                color: '#FB631C',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
                letterSpacing: '0.56px',
              }}
            >
              {items?.categoryName}
            </Typography>
          </Grid>
        );
      })}
    </Box>
  );
};

export default Cateogries;
