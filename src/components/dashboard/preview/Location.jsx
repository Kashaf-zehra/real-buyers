import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Location = ({
  city,
  purpose,
  propertyType,
  location,
  locationKeys,
  width,
  widthBox,
  className,
  p,
  pb,
  pt,
  px,
  fontSize,
  fontStyle,
  fontWeight,
}) => {
  return (
    locationKeys?.title && (
      <Box
        sx={{
          p: p ? p : 4,
          pb: pb ? pb : 5,
          px: px ? px : 'none',
          pt: pt ? pt : 'none',
          borderBottom: '1px solid #E4E4E4',
          width: widthBox ? widthBox : '100%',
        }}
      >
        <Typography
          sx={{
            color: '#000',
            fontSize: fontSize ? fontSize : '20px',
            fontWeight: 500,
            mb: 1,
          }}
        >
          {locationKeys?.title}
        </Typography>
        {purpose && (
          <Box
            sx={{
              display: 'flex',
              gap: 0.8,
              pb: 0.4,
            }}
          >
            <Typography
              sx={{
                color: '#333',
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: fontWeight ? fontWeight : 600,
              }}
              variant="body1"
            >
              {locationKeys?.purpose.charAt(0).toUpperCase() +
                locationKeys?.purpose.slice(1)}
            </Typography>
            <Typography
              sx={{
                color: '#126FAA',
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: 500,
              }}
              variant="body1"
            >
              {purpose.charAt(0).toUpperCase() + purpose?.slice(1)}
            </Typography>
          </Box>
        )}
        {propertyType && (
          <Box
            sx={{
              display: 'flex',
              gap: 0.8,
              pb: 0.4,
            }}
          >
            <Typography
              sx={{
                color: '#333',
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: fontWeight ? fontWeight : 600,
              }}
              variant="body1"
            >
              {locationKeys?.propertyType.charAt(0).toUpperCase() +
                locationKeys?.propertyType.slice(1)}
            </Typography>
            <Typography
              sx={{
                color: '#126FAA',
                fontSize: fontStyle ? fontStyle : { xs: '12px', md: '14px' },
                mt: { xs: '4px', md: '0px' },
                fontWeight: 500,
              }}
              variant="body1"
            >
              {propertyType.charAt(0).toUpperCase() + propertyType?.slice(1)}
            </Typography>
          </Box>
        )}
        {city && (
          <Box
            sx={{
              display: 'flex',
              gap: 0.8,
              pb: 0.4,
            }}
          >
            <Typography
              sx={{
                color: '#333',
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: fontWeight ? fontWeight : 600,
              }}
              variant="body1"
            >
              {locationKeys?.city.charAt(0).toUpperCase() +
                locationKeys?.city?.slice(1)}
            </Typography>
            <Typography
              sx={{
                color: '#126FAA',
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: 500,
              }}
              variant="body1"
            >
              {city.charAt(0).toUpperCase() + city?.slice(1)}
            </Typography>
          </Box>
        )}
        {locationKeys && (
          <>
            <Box
              sx={{
                display: 'flex',
                gap: 0.8,
                pb: 0.4,
              }}
            >
              <Typography
                sx={{
                  color: '#333',
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: fontWeight ? fontWeight : 600,
                }}
                variant="body1"
              >
                {locationKeys?.location?.charAt(0).toUpperCase() +
                  locationKeys?.location.slice(1)}
              </Typography>
              <Typography
                sx={{
                  color: '#126FAA',
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: 500,
                }}
                variant="body1"
              >
                {location}
              </Typography>
            </Box>
            {locationKeys && (
              <Box
                sx={{
                  mt: 2,
                  width: { xs: width ? width : '100%', xl: '522px' },
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.013300667556!2d67.11563618312421!3d24.929177436335465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3366ddcdc4253%3A0x6c0e3a1a85e57629!2sNED%20University%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sus!4v1549819379349&z=15"
                  title="Property locationKeys"
                  width={'100%'}
                  height="103"
                  allowFullScreen=""
                  frameBorder="0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={className}
                ></iframe>
              </Box>
            )}
          </>
        )}
      </Box>
    )
  );
};

export default Location;
