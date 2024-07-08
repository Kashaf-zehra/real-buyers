import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/system';
import { Fade, Popover, Typography } from '@mui/material';
import Link from 'next/link';

const SearchAndNotificationDesktopButton = ({
  handleCloseProfileMenu,
  handleOpenProfileMenu,
  profileMenu,
  userName,
  userImage,
  userEmail,
  handleLogout,
  profileIcon,
  signOut,
}) => {
  const open = Boolean(profileMenu);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Box
        onClick={handleOpenProfileMenu}
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: '500',
          fontSize: '15px',
          justifyContent: 'flex-end',
          border: '1px solid #E7E7E7',
          borderRadius: '30px',
          minWidth: '100px',
          minHeight: '43px',
          width: 'auto',
          cursor: 'pointer',
          mx: 1,
        }}
      >
        <Box sx={{ px: 1.8 }}>
          <Typography
            sx={{
              color: '#000',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              maxWidth: '100px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            {userName || ''}
          </Typography>
        </Box>
        <Box>
          <Image
            src={userImage || profileIcon}
            width={41}
            height={41}
            alt={'icon'}
            style={{ borderRadius: '100%' }}
          />
        </Box>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={profileMenu}
        onClose={handleCloseProfileMenu}
        sx={{ mt: 2.1 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transition
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
      >
        <Fade in={open} timeout={600}>
          <Box sx={{ p: 1.5 }}>
            <Box
              sx={{
                display: 'flex',
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
                  gap: 1.2,
                  p: 1,
                  '&:hover': {
                    color: '#FFF5F0 !important',
                  },
                  borderRadius: '10px',
                  background: '#F5F5F5',
                }}
              >
                <Image
                  src={userImage || '/images/profileIcon.png'}
                  style={{ borderRadius: '100%' }}
                  width={43}
                  height={43}
                  alt={'icon'}
                />
                <Box
                  sx={{
                    width: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textWrap: 'wrap',
                    gap: 0.6,
                  }}
                >
                  <Typography
                    sx={{
                      color: '#000',
                      fontSize: '15px',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: 'normal',
                      width: '140px',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {userName || ''}
                  </Typography>
                  <Typography
                    sx={{
                      width: '140px',
                      color: '#808080',
                      fontSize: '12px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {userEmail || ''}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              onClick={handleLogout}
              sx={{
                background: '#FFF5F0',
                borderRadius: '10px',
                padding: '13px 67px 13px 68px',
                '&:hover': {
                  color: '#FFF5F0 !important',
                  backgroundColor: '#FFF5F0',
                },
              }}
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
                  alt="Signout"
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
                  <Link href={'/'}>{signOut}</Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Popover>
    </>
  );
};

export default SearchAndNotificationDesktopButton;
