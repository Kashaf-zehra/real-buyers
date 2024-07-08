import { useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

import DesktopDashboardHeader from './DesktopDashboardHeader';
import {
  AGENT_MENU_ITEM,
  HEADER_MENU,
  USER_MENU_ITEM,
} from '@/src/constants/Nav_Data';
import MobileResponsiveDashboardHeader from './MobileResponsiveDashboardHeader';
import LeftSideBar from './LeftSideBar';

const DashboardHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [userType, setUserType] = useState('agent');
  console.log(setUserType);
  const menuItem = userType === 'agent' ? AGENT_MENU_ITEM : USER_MENU_ITEM;
  const [anchorElSearch, setAnchorElSearch] = useState(null);
  const [isloggedIn, setisloggedIn] = useState(null);
  const [isloggedInMobile, setisloggedInMobile] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenSearchMenu = (event) => {
    setAnchorElSearch(event.currentTarget);
  };
  const handleOpenLoginMenu = (event) => {
    setisloggedIn(event.currentTarget);
  };
  const handleOpenMobileLoginMenu = (event) => {
    setisloggedInMobile(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseSearchMenu = () => {
    setAnchorElSearch(null);
  };
  const handleCloseLoginMenu = () => {
    setisloggedIn(null);
  };
  const handleCloseMobileLoginMenu = () => {
    setisloggedInMobile(null);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    const smThreshold = 960;
    const currentWidth = window.innerWidth;

    if (currentWidth < smThreshold) {
      setIsOpen((prevState) => !prevState);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        borderBottom: '2px solid #E4E4E4',
        boxShadow: 0,
      }}
    >
      <Box
        maxWidth="fluid"
        sx={{ backgroundColor: 'white', px: { xs: 0, lg: 4 } }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex' },
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: { xs: 'flex' },
                mx: { xs: 0, md: 0, sm: 0 },
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  display: { xs: 'flex', md: 'none', lg: 'none' },
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  marginRight: 5,
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                // onClick={toggleDrawer}
                onClick={toggleDrawer}
              >
                <Image
                  src={'/images/drawer.svg'}
                  width={20}
                  height={20}
                  alt={'icon'}
                  style={{ marginTop: 2, marginLeft: 2 }}
                />
              </Typography>{' '}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  display: { xs: 'flex' },
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  textDecoration: 'none',
                }}
              >
                <Image
                  src={'/images/logo.png'}
                  width={155}
                  height={37}
                  alt={'icon'}
                  style={{ marginTop: 2, marginLeft: 2 }}
                />
              </Typography>
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="left"
                className="bla bla bla"
              >
                <Box
                  sx={{
                    height: '10%',
                  }}
                >
                  <LeftSideBar menuItem={menuItem} />
                </Box>
              </Drawer>
            </Box>
            <DesktopDashboardHeader
              headerMenu={HEADER_MENU}
              handleOpenUserMenu={handleOpenUserMenu}
              handleCloseUserMenu={handleCloseUserMenu}
              anchorElUser={anchorElUser}
              handleOpenSearchMenu={handleOpenSearchMenu}
              handleCloseSearchMenu={handleCloseSearchMenu}
              anchorElSearch={anchorElSearch}
              handleOpenLoginMenu={handleOpenLoginMenu}
              handleCloseLoginMenu={handleCloseLoginMenu}
              isloggedIn={isloggedIn}
              setisloggedIn={setisloggedIn}
            />
            <MobileResponsiveDashboardHeader
              headerMenu={HEADER_MENU}
              handleCloseNavMenu={handleCloseNavMenu}
              anchorElNav={anchorElNav}
              handleOpenUserMenu={handleOpenUserMenu}
              anchorElUser={anchorElUser}
              handleCloseUserMenu={handleCloseUserMenu}
              isloggedInMobile={isloggedInMobile}
              handleCloseMobileLoginMenu={handleCloseMobileLoginMenu}
              handleOpenMobileLoginMenu={handleOpenMobileLoginMenu}
            />
          </Box>
          <Box>
            <Button
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
                p: 0,
                color: '#000',
              }}
            >
              <MenuIcon
                sx={{
                  cursor: 'pointer',
                }}
              />
            </Button>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default DashboardHeader;
