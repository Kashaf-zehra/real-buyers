import { Box, Typography } from '@mui/material';
import React from 'react';

const Avatar = ({ data, minWidth = '40px', height = '40px', mobile }) => {
  function renderAvatarName(name) {
    // Split the name into individual components
    const nameComponents = name.split(' ');

    if (nameComponents.length === 3) {
      // First, middle, and last name
      const firstName = nameComponents[0];
      const lastName = nameComponents[2];
      return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
    } else if (nameComponents.length === 2) {
      // First and last name
      const firstName = nameComponents[0];
      const lastName = nameComponents[1];
      return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
    } else if (nameComponents.length === 1) {
      // First name only
      const firstName = nameComponents[0];
      return `${firstName[0].toUpperCase()}`;
    } else {
      // Invalid input
      return 'Invalid Name';
    }
  }

  const renderAvatar = (data) => {
    if (data?.avatar) {
      return (
        <Box
          component="img"
          src={`/images/${data?.avatar}.svg`}
          sx={{
            width: minWidth,
            height,
            borderRadius: '50%',
            display: { xs: mobile || 'flex', sm: 'flex' },
          }}
          alt={'Avatar'}
        />
      );
    } else {
      return (
        <Box
          sx={{
            minWidth,
            height,
            borderRadius: '50%',
            background: data?.background,
            color: '#fff',
            display: { xs: mobile || 'flex', sm: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography>{renderAvatarName(data?.title)}</Typography>
        </Box>
      );
    }
  };
  return renderAvatar(data);
};

export default Avatar;
