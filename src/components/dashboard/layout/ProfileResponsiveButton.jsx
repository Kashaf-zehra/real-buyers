import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/system';
import { Menu, MenuItem, Typography } from '@mui/material';

const ProfileResponsiveButton = ({
  handleOpenMobileLoginMenu,
  handleCloseMobileLoginMenu,
  userName,
  isloggedInMobile,
  handleLogout,
  profileIcon,
  signOut,
  email,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        border: '1px solid #E7E7E7',
        borderRadius: '390px',
        alignItems: 'center',
        mx: 2.1,
        cursor: 'pointer',
      }}
    >
      <Typography
        sx={{
          display: 'flex',
          color: 'black',
          alignItems: 'center',
          mx: 2,
        }}
      >
        {userName}
      </Typography>
      <Image
        src={profileIcon}
        width={41}
        height={41}
        alt={'icon'}
        onClick={handleOpenMobileLoginMenu}
      />
      <Menu
        sx={{ mt: '52px' }}
        id="menu-appbar"
        anchorEl={isloggedInMobile}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(isloggedInMobile)}
        onClose={handleCloseMobileLoginMenu}
      >
        <Box sx={{ padding: 1, gap: 1 }}>
          <MenuItem
            sx={{
              background: '#F5F5F5',
              borderRadius: '10px',
              gap: 1,
              marginBottom: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                '&:hover': {
                  color: '#FFF5F0 !important',
                },
                borderRadius: '10px',
                background: '#F5F5F5',
              }}
            >
              <Image
                src={'/images/profileIcon.png'}
                width={50}
                height={50}
                alt={'icon'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <Typography
                  sx={{
                    mx: 1,
                    color: '#000',
                    fontSize: '15px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal',
                  }}
                >
                  {userName}
                </Typography>
                <Typography
                  sx={{
                    mx: 1,
                    color: '#808080',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                >
                  {email}
                </Typography>
              </Box>
            </Box>
          </MenuItem>
          <MenuItem
            sx={{
              background: '#FFF5F0',
              borderRadius: '10px',
              padding: '13px 67px 13px 68px',
              '&:hover': {
                color: '#FFF5F0 !important',
                backgroundColor: '#FFF5F0',
              },
            }}
            onClick={handleLogout}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                textAlign: 'center',
                borderRadius: '10px',
                background: '#FFF5F0',
              }}
            >
              <Image
                src={'/images/Signout.png'}
                width={15}
                height={5}
                alt={signOut}
              />

              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mx: 1,
                  color: '#F00',
                  fontSize: '15px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                {signOut}
              </Typography>
            </Box>
          </MenuItem>
        </Box>
      </Menu>
    </Box>
  );
};

export default ProfileResponsiveButton;
