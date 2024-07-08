'use client';
import React, { useState } from 'react';
import { Button, Grid, Modal } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

import { OPEN, PLAN_PRICE } from '@/src/constants/PricePlane';
import Super from './Super';
import Basic from './Basic';
import Premium from './Premium';

const PricePlan = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>{OPEN}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            height: '100%',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            overflowY: { xs: 'scroll', sm: 'scroll' },
          }}
        >
          <Button
            onClick={handleClose}
            sx={{
              marginLeft: { xs: 20, sm: 66, md: 92 },
              position: 'absolute',
              top: { xs: 0, sm: -5, md: 150 },
            }}
          >
            <Image
              src={'/images/plan-price/close.png'}
              width={30}
              height={30}
              alt={'close'}
            />
          </Button>

          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 3, sm: 9, md: 0, lg: 0 }}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Grid item className="MobileScreenMarginTop">
              <Basic BasicData={PLAN_PRICE.Basic} />
            </Grid>
            <Grid item>
              <Premium PremiumData={PLAN_PRICE.Premium} />
            </Grid>
            <Grid item>
              <Super SuperData={PLAN_PRICE.Super} />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default PricePlan;
