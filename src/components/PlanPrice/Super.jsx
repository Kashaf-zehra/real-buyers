import React from 'react';
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

const Super = ({ SuperData }) => {
  return (
    <Box
      sx={{
        width: '250px',
        height: '429px',
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
        <Image
          src={'/images/plan-price/blue.png'}
          width={1000}
          height={100}
          alt={'image'}
        />
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '30px',
            lineHeight: 'normal',
            fontStyle: 'normal',
            textAlign: 'center',
            color: '#FFFFFF',
            position: 'absolute',
            top: 70,
            left: 90,
          }}
        >
          {SuperData.packageName}
        </Typography>
        <Box
          sx={{
            width: '164.831px',
            height: '36px',
            flexShrink: 0,
            margin: 'auto',
            mb: 1,
            display: 'flex',
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: '48.41px',
              color: '#444444',
            }}
          >
            {`$ ${SuperData.price} `}
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
                color: '#702FA9',

                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '100.023%',
              }}
            >
              <FiberManualRecordIcon
                sx={{ fontSize: 'small', marginRight: 1 }}
              />
              {`${SuperData.listing} ${LISTING} `}
            </ListItem>
            <ListItem
              sx={{
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '15px',
                color: '#702FA9',
              }}
            >
              <FiberManualRecordIcon
                sx={{ fontSize: 'small', marginRight: 1 }}
              />
              {`${SuperData.connections} ${CONNECTIONS}`}
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
          }}
        >
          <BuyButton BuyButton={BUY_BUTTON} />
        </Box>
      </Box>
    </Box>
  );
};

export default Super;
