'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Box } from '@mui/system';
import { List, ListItem, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import {
  BUY_BUTTON,
  CONNECTIONS,
  LISTING,
  PER_MONTH,
} from '@/src/constants/PricePlane';
import BuyButton from './BuyButton';

const Premium = ({ PremiumData }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const containerWidth = document.documentElement.clientWidth;
      setIsSmallScreen(containerWidth < 960);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box
      sx={{
        width: '250px',
        height: { xs: '429px', md: '515.706px' },
        flexShrink: 0,
        borderRadius: '30px',
        background: '#FFF',
        boxShadow: '1px 4px 15px 0px rgba(0, 0, 0, 0.70)',
      }}
    >
      <Box
        sx={{
          width: '250px',
          height: '39px',
          flexShrink: 0,
          borderRadius: '30px',
          position: 'relative',
        }}
      >
        {isSmallScreen ? (
          <Image
            src={'/images/plan-price/mobailImage.png'}
            width={1000}
            height={100}
            alt={'image'}
          />
        ) : (
          <Image
            src={'/images/plan-price/Yellow.png'}
            width={1000}
            height={100}
            alt={'image'}
          />
        )}

        <Box
          sx={{
            width: '164.831px',
            height: '36px',
            flexShrink: 0,
            margin: 'auto',
            mb: { lg: 1 },
            display: 'flex',
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '30px',
              lineHeight: 'normal',
              fontStyle: 'normal',
              textAlign: 'center',
              color: '#FFFFFF',
              position: 'absolute',
              top: 103,
              left: 110,
            }}
          >
            {PremiumData.packageName}
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: '48.41px',
              color: '#444444',
            }}
          >
            {`$ ${PremiumData.price} `}
          </Typography>
          <Typography
            sx={{
              width: 'auto',
              height: '27px',
              mt: 1.2,
              mx: 1.1,
              borderRight: '3px solid #444444',
            }}
          ></Typography>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '13.36px',
              color: '#444444',
              pt: 2,
            }}
          >
            {PER_MONTH}
          </Typography>
        </Box>
        <Box
          sx={{
            px: 6,
            mb: 1,
          }}
        >
          <List component="ul" sx={{ my: 0 }}>
            <ListItem
              sx={{
                color: '#FB631C',

                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '100.023%',
              }}
            >
              <FiberManualRecordIcon
                sx={{ fontSize: 'small', marginRight: 0.5 }}
              />
              {`${PremiumData.listing} ${LISTING}`}
            </ListItem>
            <ListItem
              sx={{
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '15px',
                color: '#FB631C',
              }}
            >
              <FiberManualRecordIcon
                sx={{ fontSize: 'small', marginRight: 0.5 }}
              />
              {`${PremiumData.connections} ${CONNECTIONS}`}
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '39px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: { md: 4 },
          }}
        >
          <BuyButton BuyButton={BUY_BUTTON} />
        </Box>
      </Box>
    </Box>
  );
};

export default Premium;
