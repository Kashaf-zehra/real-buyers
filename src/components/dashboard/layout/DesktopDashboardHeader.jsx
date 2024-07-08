'use client';
import React, { useState } from 'react';
import Cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Box } from '@mui/system';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  Badge,
  Button,
  IconButton,
  Menu,
  TextField,
  Tooltip,
} from '@mui/material';

import {
  EMAIL,
  LINK_NAME,
  USER_NAME,
  SEARCH,
  SIGN_OUT,
  CUSTOM_COLOR,
} from '@/src/constants/Dashboard_Header';
import SearchAndNotificationDesktopButton from './SearchAndNotificationDesktopButton ';
import { setLoggedOut } from '@/src/redux/slices/auth/authSlice';

const DesktopDashboardHeader = ({
  headerMenu,
  handleOpenSearchMenu,
  anchorElSearch,
  handleCloseSearchMenu,
  handleCloseLoginMenu,
  handleOpenLoginMenu,
  isloggedIn,
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
    handleCloseLoginMenu();
  };
  return (
    <Box
      s
      sx={{
        flexGrow: 1,
        justifyContent: 'end',
        gap: 4,
        display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
      }}
    >
      {headerMenu?.map((item) => {
        return (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Search">
                  <Image
                    onClick={handleOpenSearchMenu}
                    src={item?.searchIcon}
                    width={41}
                    height={43}
                    alt={'icon'}
                    style={{ marginRight: 30, cursor: 'pointer' }}
                  />
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElSearch}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElSearch)}
                  onClose={handleCloseSearchMenu}
                >
                  <Box
                    sx={{
                      padding: 2,
                    }}
                  >
                    <TextField
                      id="outlined-search"
                      label="Search"
                      type="search"
                      size="small"
                      onChange={(e) => searchInput(e)}
                    />
                    <Link href={`/dashboard/proposals?search=${search}`}>
                      <Button variant="primary" sx={{ mx: 1 }}>
                        {SEARCH}
                      </Button>
                    </Link>
                  </Box>
                </Menu>
              </Box>

              <Image
                src={item?.linkIcon}
                width={20}
                height={20}
                alt={'icon'}
                style={{ marginRight: 8 }}
              />
              <Link
                href="/"
                style={{
                  display: 'inline-block',
                  color: '#666666',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  marginRight: '14px',
                  fontWeight: 500,
                }}
              >
                {LINK_NAME}
              </Link>
              <IconButton
                sx={{
                  p: 0,
                  color: '#FF631C',
                  ml: 2,
                }}
              >
                <Badge
                  badgeContent={4}
                  color={CUSTOM_COLOR}
                  sx={{
                    // width: 25,
                    // height: 25,
                    '& .MuiBadge-badge': {
                      color: 'white',
                      backgroundColor: '#1176AD',
                      width: 10,
                      fontSize: '10px',
                      height: 15,
                    },
                  }}
                >
                  <NotificationsIcon
                    sx={{ fontSize: 30, color: { CUSTOM_COLOR } }}
                  />
                </Badge>
              </IconButton>
            </Box>
            <SearchAndNotificationDesktopButton
              handleCloseLoginMenu={handleCloseLoginMenu}
              handleOpenLoginMenu={handleOpenLoginMenu}
              userName={USER_NAME}
              profileIcon={item?.profileIcon}
              handleLogout={handleLogout}
              isloggedIn={isloggedIn}
              signOut={SIGN_OUT}
              email={EMAIL}
            />
          </>
        );
      })}
    </Box>
  );
};

export default DesktopDashboardHeader;
