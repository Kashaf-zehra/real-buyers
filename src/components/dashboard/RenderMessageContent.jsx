import { Box, Typography } from '@mui/material';
import React from 'react';

const RenderMessageContent = ({ data }) => {
  const images = data?.content?.slice(0, 4);
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {images?.map((img, imgIndex) => {
        return (
          <Box
            key={imgIndex}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100px',
              height: '100px',
              backgroundColor: '#fff',
              marginRight: imgIndex !== data?.content.length - 1 && '10px',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${typeof img === 'string' ? img : URL.createObjectURL(img?.data)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              // src={typeof img === 'string' ? img : URL.createObjectURL(img?.data)}
              alt={'Image'}
            />
            {imgIndex === 3 && data?.content.length > 4 && (
              <Box
                sx={{
                  minWidth: '100px',
                  height: '100px',
                  background: 'rgba(0,0,0,0.5)',
                  zIndex: 1,
                  position: 'absolute',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {
                  <Box
                    sx={{
                      background: 'rgba(255,255,255,0.6)',
                      padding: '5px 0',
                      minWidth: '70%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50px',
                      cursor: 'pointer',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '20px',
                        fontWeight: 500,
                      }}
                    >
                      + {data?.content.length - 4}
                    </Typography>
                  </Box>
                }
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default RenderMessageContent;
