import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box } from '@mui/system';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, Button, IconButton, Menu, TextField } from '@mui/material';

import { CUSTOM_COLOR } from '@/src/constants/Dashboard_Header';

const SearchAndNotificationResponsiveButton = ({
  handleOpenUserMenu,
  handleCloseUserMenu,
  searchButtonName,
  anchorElUser,
  searchInput,
  searchIcon,
  search,
}) => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Image
          onClick={handleOpenUserMenu}
          src={searchIcon}
          width={35}
          height={35}
          alt={'icon'}
          style={{ marginRight: 30, cursor: 'pointer' }}
        />
        <IconButton
          sx={{
            p: 0,
            color: '#FF631C',
            my: 2,
            mr: '16px',
          }}
        >
          <Badge
            badgeContent={4}
            color={CUSTOM_COLOR}
            sx={{
              width: 25,
              height: 25,
              display: 'block',
              '& .MuiBadge-badge': {
                color: 'white',
                width: 10,
                height: 20,
              },
            }}
          >
            <NotificationsIcon sx={{ fontSize: 35, color: { CUSTOM_COLOR } }} />
          </Badge>
        </IconButton>
      </Box>
      <Menu
        sx={{ mt: '50px' }}
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
          <TextField
            id="outlined-search"
            label="Search"
            type="search"
            size="small"
            onChange={(e) => searchInput(e)}
            sx={{ my: { xs: 1, sm: 0 } }}
          />
          <Link href={`/dashboard/proposals?search=${search}`}>
            <Button variant="primary" sx={{ mx: 1, my: { xs: 1, sm: 0 } }}>
              {searchButtonName}
            </Button>
          </Link>
        </Box>
      </Menu>
    </Box>
  );
};

export default SearchAndNotificationResponsiveButton;
