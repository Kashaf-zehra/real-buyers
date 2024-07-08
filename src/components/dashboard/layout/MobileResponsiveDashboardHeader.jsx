import React, { useState } from 'react';
import Cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Box } from '@mui/system';
import { Menu } from '@mui/material';

import {
  LINK_NAME,
  USER_NAME,
  EMAIL,
  SEARCH,
  SIGN_OUT,
} from '@/src/constants/Dashboard_Header';

import SearchAndNotificationResponsiveButton from './SearchAndNotificationResponsiveButton';
import ProfileResponsiveButton from './ProfileResponsiveButton';
import { setLoggedOut } from '@/src/redux/slices/auth/authSlice';

const MobileResponsiveDashboardHeader = ({
  handleCloseMobileLoginMenu,
  handleOpenMobileLoginMenu,
  handleCloseUserMenu,
  handleCloseNavMenu,
  handleOpenUserMenu,
  isloggedInMobile,
  anchorElUser,
  headerMenu,
  anchorElNav,
}) => {
  const router = useRouter();
  const [search, setSearch] = useState();
  const dispatch = useDispatch();

  const searchInput = (e) => {
    setSearch(e.target.value);
  };
  const handleLogout = () => {
    Cookie.remove('token');
    Cookie.remove('userType');
    dispatch(setLoggedOut());
    router.push('/signin');
    handleCloseMobileLoginMenu();
  };
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        // display: { sm: 'block', md: 'block', lg: 'none' },
        display: 'flex',
        color: '#000',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: 'end',
          gap: 4,
          display: {
            xs: 'block',
            sm: 'block',
            md: 'block',
            lg: 'block',
          },
          flexDirection: 'column',
          width: '198px ',
        }}
      >
        {headerMenu?.map((item) => {
          return (
            <>
              <Box sx={{ p: 2 }}>
                <SearchAndNotificationResponsiveButton
                  handleCloseUserMenu={handleCloseUserMenu}
                  handleOpenUserMenu={handleOpenUserMenu}
                  searchIcon={item?.searchIcon}
                  anchorElUser={anchorElUser}
                  searchInput={searchInput}
                  searchButtonName={SEARCH}
                  search={search}
                />
                <Box sx={{ display: 'flex', mt: 2 }}>
                  <Link href="/">
                    <Image
                      src={item?.linkIcon}
                      width={20}
                      height={20}
                      alt={'icon'}
                      style={{ marginRight: 10 }}
                    />
                  </Link>
                  <Link href="/">{LINK_NAME}</Link>
                </Box>
              </Box>
              <ProfileResponsiveButton
                handleCloseMobileLoginMenu={handleCloseMobileLoginMenu}
                handleOpenMobileLoginMenu={handleOpenMobileLoginMenu}
                userName={USER_NAME}
                isloggedInMobile={isloggedInMobile}
                profileIcon={item?.profileIcon}
                handleLogout={handleLogout}
                signOut={SIGN_OUT}
                email={EMAIL}
              />
            </>
          );
        })}
      </Box>
    </Menu>
  );
};

export default MobileResponsiveDashboardHeader;
