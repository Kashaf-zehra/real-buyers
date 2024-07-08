import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import {
  ALT,
  PROPERTIES_FOR_RENT,
  VIEW_BUTTON,
} from '@/src/constants/AgentProfile';

const PropertyForRent = ({ data, link }) => {
  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Box
            sx={{
              display: 'flex',
              verticalAlign: 'baseline',
              marginBottom: 1,
            }}
          >
            <Image
              src="/images/agent-profile-icons/home.svg"
              width={15}
              height={15}
              alt={ALT}
            />
            <Typography
              variant="body2"
              sx={{
                color: '#333',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                display: 'flex',
                alignItems: 'center',
                ml: 1,
              }}
            >
              {`${data} ${PROPERTIES_FOR_RENT}`}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Link href={link}>
              <Button
                variant="body2"
                sx={{
                  color: '#FB631C',
                  fontSize: 15,
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                {VIEW_BUTTON} &nbsp;
                <Image
                  src="/images/agent-profile-icons/arrow.svg"
                  width={9}
                  height={9}
                  alt={ALT}
                />
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PropertyForRent;
