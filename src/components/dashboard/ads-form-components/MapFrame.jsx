import React from 'react';
import { Box } from '@mui/material';
const MapFrame = ({ width, height }) => {
  return (
    <Box sx={{ padding: '5px' }}>
      <iframe
        title="Property Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.013300667556!2d67.11563618312421!3d24.929177436335465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3366ddcdc4253%3A0x6c0e3a1a85e57629!2sNED%20University%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sus!4v1549819379349&z=15"
        width={width}
        height={height}
        frameBorder="0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};
export default MapFrame;
