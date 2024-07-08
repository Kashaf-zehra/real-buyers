import React from 'react';
import { Box } from '@mui/system';
import Image from 'next/image';

import { ALT } from '@/src/constants/Login';

const RealEstateImage = () => {
  return (
    <Box>
      <Image
        src={'/images/signup_page/boximage.svg'}
        width={550}
        height={500}
        alt={ALT.BUILDING_IMAGE}
      />
    </Box>
  );
};
export default RealEstateImage;
