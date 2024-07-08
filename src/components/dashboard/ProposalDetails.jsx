import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import LiveBiddingPropertiesList from './LiveBiddingPropertiesList';
import {
  ESTIMATE_RANGE,
  postListingAdCard,
} from '@/src/constants/user/Dashboard';

const ProposalDetails = ({
  city,
  area,
  title,
  amount,
  status,
  location,
  proposal,
  description,
  postedTime,
}) => {
  return (
    <>
      <Grid container>
        <Box
          sx={{
            width: '100%',
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              padding: { xs: 4, sm: 6 },
              '@media(min-width: 280px) and (max-width: 445px)': {
                textAlign: 'center',
              },
            }}
          >
            <Grid
              item
              md={8}
              lg={6.5}
              sx={{
                color: '#333',
              }}
            >
              <Typography
                variant="h4"
                sx={{ ml: 0.4, fontSize: { xs: '21px' } }}
              >
                {title || ''}
              </Typography>
              <Typography variant="body1" sx={{ ml: 0.5, mt: 1 }}>
                {postedTime || ''}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={5.5}
              xl={2}
              sx={{
                color: '#333',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: {
                    xs: 'start',
                    md: 'end',
                  },
                  '@media(min-width: 280px) and (max-width: 445px)': {
                    justifyContent: 'center',
                  },
                  px: { xs: '5px' },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontSize: '14px', fontWeight: 600 }}
                >
                  {ESTIMATE_RANGE}
                </Typography>
                <Typography
                  sx={{
                    ml: 1,
                    fontWeight: 700,
                    color: '#333333',
                    fontSize: '20px',
                  }}
                  component={'span'}
                >
                  {amount || ''}
                </Typography>
              </Box>
            </Grid>
            <Box
              sx={{
                color: '#333',
                px: '20px',
                paddingTop: '40px',
                paddingBottom: '20px',
                '@media(min-width: 280px) and (max-width: 445px)': {
                  pr: '10px',
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '20px',
                  mb: 1,
                  color: '#333333',
                }}
              >
                {description || ''}
              </Typography>
            </Box>
            <LiveBiddingPropertiesList
              area={area || ''}
              city={city || ''}
              status={status || ''}
              proposal={proposal || ''}
              location={location || ''}
              cardKeys={postListingAdCard}
              noConnects={false}
            />
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default ProposalDetails;
