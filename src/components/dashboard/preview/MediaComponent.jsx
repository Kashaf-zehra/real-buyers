import { Box, Typography } from '@mui/material';
import React from 'react';
import AdMediaSlider from '../ads-form-components/AdMediaSlider';

const MediaComponent = ({ title, images, videos, mediaType }) => {
  return (
    <>
      <Box
        sx={{
          p: 5,
          borderBottom: '1px solid #E4E4E4',
          '@media(min-width:280px) and (max-width:450px)': { px: 0.3 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '20px' },
            fontWeight: 500,
            '@media(min-width:280px) and (max-width:450px)': { pl: 3, mb: 1 },
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            pt: 2,
            width: { xs: '640px' },
            overflowX: 'auto',
            '@media(min-width:280px) and (max-width:450px)': {
              width: 'auto',
              px: 1,
            },
          }}
        >
          <AdMediaSlider
            media={
              mediaType == 'images'
                ? images
                : '' || mediaType == 'videos'
                  ? videos
                  : ''
            }
            mediaType={mediaType}
          />
        </Box>
      </Box>
    </>
  );
};

export default MediaComponent;
