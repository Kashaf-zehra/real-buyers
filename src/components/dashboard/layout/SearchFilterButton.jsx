import React from 'react';
import Image from 'next/image';
import { Button, FormGroup, Grid, TextField } from '@mui/material';

import { FILTER_BUTTON } from '@/src/constants/Dashboard';
import TuneIcon from '@mui/icons-material/Tune';

const SearchFilterButton = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        lg={7}
        md={6}
        sm={6}
        sx={{
          padding: {
            lg: '40px 54px  40px 54px',
            md: '40px 0px  40px 54px',
            xs: '40px 54px  40px 40px',
          },
        }}
      >
        <FormGroup sx={{ position: 'relative' }}>
          <TextField
            variant="outlined"
            placeholder="Search by name"
            InputProps={{
              sx: {
                height: '40px',
                padding: '10px',
                borderRadius: '10px',
                paddingRight: '0',
                border: 'none',
                '&:hover': {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  border: 'none',
                },
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderRadius: '0 10px 10px 0',
              width: '40px',
              height: '40px',
              backgroundColor: '#126FAA !important',
              '&:hover': {
                backgroundColor: 'none',
                boxShadow: 'none',
              },
              boxShadow: 'none',
            }}
          >
            <Image
              src={'/images/dashboard/search.svg'}
              width={25}
              height={25}
              alt={'icon'}
            />
          </Button>
        </FormGroup>
      </Grid>
      <Grid
        item
        xs={12}
        lg={5}
        md={6}
        sm={5}
        sx={{
          padding: {
            xs: '0px 45px 0px 40px',
            sm: '40px 45px  0px 80px',
            md: '40px 54px  40px 54px',
          },
          textAlign: { md: 'end', lg: 'end' },
          display: 'flex',
          '@media(min-width: 280px) and (max-width: 445px)': {
            justifyContent: 'center',
          },
        }}
      >
        <Button
          variant="outlined"
          sx={{
            width: '150px',
            height: '40px',
            flexShrink: 0,
            borderRadius: '50px',
            background: '#fff',
            gap: 1,
          }}
        >
          <TuneIcon fontSize="small" />
          {FILTER_BUTTON}
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchFilterButton;
