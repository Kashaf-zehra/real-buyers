import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { usePathname } from 'next/navigation';

const LiveBiddingPropertiesList = ({
  city,
  status,
  location,
  proposal,
  connects,
  cardKeys,
  noConnects,
  pl,
  justifyContent,
}) => {
  const pathName = usePathname();
  const agent = '/agent';
  const user = '/user';
  return (
    <Box
      sx={{
        width: '100%',
        paddingLeft: pl ? pl : '17px',
        '@media(min-width: 280px) and (max-width: 445px)': {
          justifyContent: 'center',
        },
      }}
    >
      {status && (
        <Box
          sx={{
            display: 'flex',
            '@media(min-width: 280px) and (max-width: 445px)': {
              justifyContent: justifyContent ? justifyContent : 'center',
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', mx: 0.5, color: '#333333' }}
          >
            {cardKeys?.status || ''}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#333333', fontWeight: 500 }}
          >
            {status || ''}
          </Typography>
        </Box>
      )}
      {city && (
        <Box
          sx={{
            display: 'flex',
            '@media(min-width: 280px) and (max-width: 445px)': {
              justifyContent: justifyContent ? justifyContent : 'center',
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', mx: 0.5, color: '#333333' }}
          >
            {cardKeys?.city || ''}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#333333', fontWeight: 500 }}
          >
            {city || ''}
          </Typography>
        </Box>
      )}
      {location && (
        <Box
          sx={{
            display: 'flex',
            '@media(min-width: 280px) and (max-width: 445px)': {
              justifyContent: justifyContent ? justifyContent : 'center',
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', mx: 0.5, color: '#333333' }}
          >
            {cardKeys?.area || ''}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#333333', fontWeight: 500 }}
          >
            {location || ''}
          </Typography>
        </Box>
      )}
      {pathName?.includes(user) && proposal?.length > 0 ? (
        <Box
          sx={{
            display: 'flex',
            '@media(min-width: 280px) and (max-width: 445px)': {
              justifyContent: 'center',
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', mx: 0.5, color: '#333333' }}
          >
            {cardKeys?.proposal || ''}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#333333', fontWeight: 500 }}
          >
            {proposal.length || ''}
          </Typography>
        </Box>
      ) : null}

      {pathName.includes(agent) && connects ? (
        <>
          {noConnects && (
            <Box
              sx={{
                display: 'flex',
                '@media(min-width: 280px) and (max-width: 445px)': {
                  justifyContent: 'center',
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: 'bold', mx: 0.5, color: '#333333' }}
              >
                {cardKeys?.connects}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: '#333333', fontWeight: 500 }}
              >
                {connects}
              </Typography>
            </Box>
          )}
        </>
      ) : null}
    </Box>
  );
};

export default LiveBiddingPropertiesList;
