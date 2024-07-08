import { Badge } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';

const UserProfileImage = ({
  image,
  isActive,
  width,
  height,
  badgeWidth,
  badgeHeigth,
  right,
  padding,
}) => {
  return (
    <Badge>
      <Box
        sx={{
          position: 'relative',
          width: width,
          height: height,
        }}
      >
        <Image src={image} width={width} height={height} alt={'profile'} />
        <Box
          sx={{
            width: 'auto',
            height: 'auto',
            borderRadius: '50%',
            backgroundColor: 'white',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            right: right,
            p: padding,
            bottom: 0,
          }}
        >
          <Box
            sx={{
              width: badgeWidth,
              height: badgeHeigth,
              borderRadius: '50%',
              backgroundColor: isActive ? '#18DD00' : 'gray',
              alignContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          ></Box>
        </Box>
      </Box>
    </Badge>
  );
};

export default UserProfileImage;
