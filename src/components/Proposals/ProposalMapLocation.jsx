import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const ProposalMapLocation = ({ location }) => {
  return (
    <Box sx={{ p: 4, pb: 5, borderBottom: '1px solid #E4E4E4' }}>
      <Typography
        sx={{
          color: '#000',
          fontSize: '20px',
          fontWeight: 500,
          mb: 1,
        }}
      >
        {location?.title}
      </Typography>
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
            fontSize: '14px',
            fontWeight: 600,
          }}
          variant="body1"
        >
          {location?.purpose}
        </Typography>
        <Typography
          sx={{
            color: '#126FAA',
            fontSize: '14px',
            fontWeight: 500,
          }}
          variant="body1"
        >
          0
        </Typography>
      </Box>
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
            fontSize: '14px',
            fontWeight: 600,
          }}
          variant="body1"
        >
          {location?.propertyType}
        </Typography>
        <Typography
          sx={{
            color: '#126FAA',
            fontSize: '14px',
            fontWeight: 500,
          }}
          variant="body1"
        >
          0
        </Typography>
      </Box>
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
            fontSize: '14px',
            fontWeight: 600,
          }}
          variant="body1"
        >
          {location?.city}
        </Typography>
        <Typography
          sx={{
            color: '#126FAA',
            fontSize: '14px',
            fontWeight: 500,
          }}
          variant="body1"
        >
          0
        </Typography>
      </Box>
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
            fontSize: '14px',
            fontWeight: 600,
          }}
          variant="body1"
        >
          {location?.area}
        </Typography>
        <Typography
          sx={{
            color: '#126FAA',
            fontSize: '14px',
            fontWeight: 500,
          }}
          variant="body1"
        >
          0
        </Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.013300667556!2d67.11563618312421!3d24.929177436335465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3366ddcdc4253%3A0x6c0e3a1a85e57629!2sNED%20University%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sus!4v1549819379349&z=15"
          title="Property Location"
          width="100%"
          height="150"
          allowFullScreen=""
          frameBorder="0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

export default ProposalMapLocation;
