import React from 'react';
import { Box } from '@mui/system';
import { Fade, Popover, Typography } from '@mui/material';

const NotificationPopover = ({
  handleCloseNotificationMenu,
  notificationMenu,
}) => {
  const open = Boolean(notificationMenu);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={notificationMenu}
        onClose={handleCloseNotificationMenu}
        transition
        TransitionComponent={Fade}
        sx={{ mt: 2.6 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        TransitionProps={{ timeout: 600 }}
      >
        <Fade in={open} timeout={600}>
          <Box sx={{ p: 1.5 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                borderBottom: '1px solid #E4E4E4',
                width: '250px',
                gap: 1,
                p: 1,
              }}
            >
              <Typography
                sx={{
                  color: '#000',
                  fontSize: '15px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  maxWidth: '230px',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
              >
                {'We Need 4 Bedrooms Bedrooms'}
              </Typography>
              <Typography>You have received 2 proposals on your ad.</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                borderBottom: '1px solid #E4E4E4',
                width: '250px',
                gap: 1,
                p: 1,
              }}
            >
              <Typography
                sx={{
                  color: '#000',
                  fontSize: '15px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  maxWidth: '230px',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
              >
                {'We Need 4 Bedrooms Bedrooms'}
              </Typography>
              <Typography>You have received 2 proposals on your ad.</Typography>
            </Box>
          </Box>
        </Fade>
      </Popover>
    </>
  );
};

export default NotificationPopover;
