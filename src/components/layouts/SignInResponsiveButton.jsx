import React from 'react';
import { Box } from '@mui/system';
import Image from 'next/image';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { saveLoginData, setLoggedIn } from '@/src/redux/slices/auth/authSlice';
import ModalSignin from '@/src/components/dashboard/modals/ModalSignin';
import { LOGOUT, SETTINGS, SIGN_IN, USER_NAME } from '@/src/constants/Login';

const SignInResponsiveButton = ({
  isUserLoggedIn,
  handleOpenUserMenu,
  handleCloseUserMenu,
  anchorElUser,
  handleClose,
  open,
  handleOpen,
}) => {
  const dispatch = useDispatch();

  const handleSetting = () => {};
  const handleLogout = () => {
    dispatch(saveLoginData(''));
    dispatch(setLoggedIn(true));
    handleCloseUserMenu();
  };
  return (
    <Box sx={{ flexGrow: 0, display: 'flex', gap: 2 }}>
      {isUserLoggedIn === true ? (
        <>
          <Button
            sx={{
              display: {
                xs: 'block',
                sm: 'block',
                lg: 'block',
                xl: 'block',
              },
            }}
            onClick={handleOpenUserMenu}
          >
            <Image
              src={'/images/login.png'}
              width={80}
              height={40}
              alt={'dashboardIcon'}
            />
          </Button>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <Box
              sx={{
                padding: 2,
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  fontWeight: 600,
                  color: '#000',
                  mt: -2,
                }}
              >
                {USER_NAME}
              </Typography>
              <MenuItem
                sx={{
                  width: '120px',
                  padding: 0.7,
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  textAlign: 'center',
                  border: '1px solid #D6D6D6',
                  marginBottom: '5px',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '5px',
                  color: '#333333',
                  my: 2,
                }}
                onClick={handleSetting}
              >
                {SETTINGS}
              </MenuItem>
              <MenuItem
                onClick={handleLogout}
                sx={{
                  width: '120px',
                  padding: 0.7,
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  textAlign: 'center',
                  border: '1px solid #D6D6D6',
                  marginBottom: '5px',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '5px',
                  color: '#333333',
                }}
              >
                {LOGOUT}
              </MenuItem>
            </Box>
          </Menu>
        </>
      ) : (
        <Button
          variant="primary"
          sx={{
            width: '120px',
            height: '40px',
            display: {
              xs: 'block',
              sm: 'block',
              lg: 'none',
              xl: 'none',
            },
          }}
          onClick={handleOpen}
        >
          <Typography sx={{ color: '#fff' }}>{SIGN_IN}</Typography>
        </Button>
      )}
      <ModalSignin handleClose={handleClose} open={open} />
    </Box>
  );
};

export default SignInResponsiveButton;
