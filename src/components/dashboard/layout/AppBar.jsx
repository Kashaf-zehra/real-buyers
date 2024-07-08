import React, { useState } from 'react';
import Cookie from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import NotificationsIcon from '@mui/icons-material/Notifications';

import {
  LINK_NAME,
  SIGN_OUT,
  CUSTOM_COLOR,
  GOTOPAGEICON,
  PROFILEICON,
  SEARCHICON,
} from '@/src/constants/Dashboard_Header';

import Image from 'next/image';
import Link from 'next/link';
import { Badge, IconButton, Tooltip, Typography } from '@mui/material';
import SearchAndNotificationDesktopButton from './SearchAndNotificationDesktopButton ';
import { setLoggedOut } from '@/src/redux/slices/auth/authSlice';
import NotificationPopover from './NotificationPopover';
import SearchPopover from './searchPopover';

export default function ResponsiveNavbar({ openSidebar }) {
  const router = useRouter();
  const [searchMenu, setSearchMenu] = useState(null);
  const [profileMenu, setProfileMenu] = useState(null);
  const [notificationMenu, setNotificationMenu] = useState(null);
  const dispatch = useDispatch();
  const pathName = usePathname();
  const current_user = useSelector((state) => state?.currentUser?.user);
  const postRequestAds = useSelector(
    (state) => state?.postRequestAds?.userPostings
  );
  const postListingAds = useSelector(
    (state) => state?.postListingAds?.agentPostings
  );
  const dashboard = '/user/dashboard';
  const liveBidding = '/agent/live-bidding';

  const handleOpenProfileMenu = (event) => {
    setProfileMenu(event?.currentTarget);
  };
  const handleOpenNotificationMenu = (event) => {
    setNotificationMenu(event?.currentTarget);
  };
  const handleCloseNotificationMenu = () => {
    setNotificationMenu(null);
  };
  const handleCloseProfileMenu = () => {
    setProfileMenu(null);
  };
  const handleOpenSearchMenu = (event) => {
    setSearchMenu(event?.currentTarget);
  };

  const handleCloseSearchMenu = () => {
    setSearchMenu(null);
  };

  const handleLogout = () => {
    Cookie?.remove('token');
    Cookie?.remove('userType');
    dispatch(setLoggedOut());
    router?.push('/signin');
    handleCloseProfileMenu();
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
      }}
    >
      <AppBar
        sx={{
          position: 'fixed',
          backgroundColor: '#fff',
          borderBottom: '2px solid #E4E4E4',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <Box
            sx={{
              width: '100%',
              height: 66,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: { xs: '53%', md: 'auto' },
                display: 'flex',
                gap: 2,
                alignItems: 'center',
              }}
            >
              <Box
                sx={{ width: 'auto' }}
                component={'div'}
                onClick={openSidebar}
              >
                <Image
                  src={'/images/drawer.svg'}
                  width={20}
                  height={20}
                  alt={'icon'}
                />
              </Box>

              <Box sx={{ width: { xs: 'auto', sm: '100%' } }}>
                <Link href={'/'}>
                  <Image
                    src={'/images/logo.png'}
                    width={155}
                    height={37}
                    alt={'icon'}
                  />
                </Link>
              </Box>
            </Box>
            <Box sx={{ width: 'auto', display: { xs: 'flex' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                {pathName == dashboard || pathName == liveBidding ? (
                  <Tooltip title="Search">
                    <Box
                      component={'img'}
                      onClick={handleOpenSearchMenu}
                      src={SEARCHICON}
                      alt={'icon'}
                      sx={{
                        width: { xs: '30px', sm: '41px' },
                        height: { xs: '30px', sm: '43px' },
                        display: { xs: 'flex', md: 'flex' },
                        mr: { xs: 0.5, sm: 1.5, md: 2.5 },
                        cursor: 'pointer',
                      }}
                    />
                  </Tooltip>
                ) : null}
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Link
                    href="/"
                    style={{
                      display: 'flex',
                    }}
                  >
                    <Image
                      src={GOTOPAGEICON}
                      width={20}
                      height={20}
                      alt={'icon'}
                      style={{
                        mr: { xs: 0.5, sm: 1.5, md: 2.5 },
                      }}
                    />
                    <Typography
                      sx={{
                        color: '#666666',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        mx: '14px',
                        fontWeight: 500,
                      }}
                    >
                      {LINK_NAME}
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <IconButton
                    onClick={handleOpenNotificationMenu}
                    sx={{
                      p: 0,
                      mr: { xs: 0.5, sm: 1.5, md: 2.5 },
                      color: '#FF631C',
                      position: 'relative',
                    }}
                  >
                    <Badge
                      badgeContent={2}
                      color={CUSTOM_COLOR}
                      sx={{
                        '& .MuiBadge-badge': {
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          color: 'white',
                          backgroundColor: '#1176AD',
                          maxWidth: { xs: 7, sm: 7 },
                          fontSize: { xs: '8px', sm: '10px' },
                          height: { xs: 12, sm: 13 },
                          minWidth: { xs: 8, sm: 13 },
                        },
                      }}
                    >
                      <NotificationsIcon
                        sx={{
                          fontSize: { xs: 28, sm: 35 },
                          color: { CUSTOM_COLOR },
                        }}
                      />
                    </Badge>
                  </IconButton>
                  <NotificationPopover
                    handleCloseNotificationMenu={handleCloseNotificationMenu}
                    notificationMenu={notificationMenu}
                  />
                </Box>
                <SearchPopover
                  searchMenu={searchMenu}
                  currentUser={current_user}
                  findData={
                    pathName?.includes(dashboard)
                      ? postRequestAds
                      : postListingAds
                  }
                  handleCloseSearchMenu={handleCloseSearchMenu}
                />
                <Box
                  onClick={handleOpenProfileMenu}
                  component={'img'}
                  sx={{
                    width: { xs: '30px', sm: '40px' },
                    height: { xs: '30px', sm: '40px' },
                    display: { xs: 'flex', md: 'none' },
                    alignSelf: 'end',
                  }}
                  src={current_user?.profile_image || PROFILEICON}
                  alt={'icon'}
                />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <SearchAndNotificationDesktopButton
                    handleCloseProfileMenu={handleCloseProfileMenu}
                    handleOpenProfileMenu={handleOpenProfileMenu}
                    profileMenu={profileMenu}
                    userName={current_user?.first_name || 'User Name'}
                    userImage={current_user?.profile_image || 'User Image'}
                    userEmail={current_user?.email || PROFILEICON}
                    profileIcon={PROFILEICON}
                    handleLogout={handleLogout}
                    signOut={SIGN_OUT}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
