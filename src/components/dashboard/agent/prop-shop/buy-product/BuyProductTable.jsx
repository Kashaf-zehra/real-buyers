'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import SubscriptionHeader from './SubscriptionHeader';
import PackageBox from './PackageBox';
import PriceBox from './PriceBox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  paddingy: theme.spacing(1),
  alignItems: 'center',
  display: 'flex',
  border: 'none',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
}));

export default function BuyProductTable({ columns, rows }) {
  const { FirstHeaderName, SecondHeaderName } = columns;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid xs={12} md={12} lg={6} item>
          <Item>
            <Box
              sx={{
                padding: '13px',
                backgroundColor: '#EDF7FF',
                width: '100%',
                margin: 0,
              }}
            >
              <SubscriptionHeader headerName={FirstHeaderName} />
            </Box>
          </Item>
          {rows?.map((row, i) => (
            <Item key={i}>
              <Box
                sx={{
                  width: '100%',
                  height: { xs: 'auto', md: '100px' },
                  py: { xs: 2, sm: 3 },
                  px: 4,
                }}
              >
                <PackageBox
                  icon={row?.icon}
                  text={row?.text}
                  discription={row?.discription}
                />
              </Box>
            </Item>
          ))}
        </Grid>
        <Grid xs={12} md={12} lg={6} item>
          <Item>
            <Box
              sx={{
                padding: '13px',
                backgroundColor: '#EDF7FF',
                width: '100%',
                margin: 0,
              }}
            >
              <SubscriptionHeader headerName={SecondHeaderName} />
            </Box>
          </Item>
          {rows?.map((row, i) => (
            <Item key={i}>
              <Box
                sx={{
                  width: '100%',
                  height: { xs: 'auto', md: '100px' },
                  py: { xs: 2, sm: 4 },
                  px: 5,
                }}
              >
                <PriceBox
                  price={row?.price}
                  buttonText={row?.buttonText}
                  id={row?.id}
                  data={rows}
                />
              </Box>
            </Item>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
