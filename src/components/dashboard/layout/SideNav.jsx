import Sidebar from './Sidebar';
import { Backdrop, Drawer, useMediaQuery } from '@mui/material';
import { SIDE_NAV_WIDTH } from '@/src/constants/sidebar';

export const SideNav = (props) => {
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const content = <Sidebar userName={'Check'} />;

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            width: SIDE_NAV_WIDTH,
            overflowX: 'hidden',
            overflowY: 'hidden',
            height: '100%',
            top: 67,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      BackdropProps={{ click: false }}
      BackdropComponent={(props) => (
        <Backdrop {...props} sx={{ backgroundColor: 'rgba(0, 0, 0, 0)' }} />
      )}
      PaperProps={{
        sx: {
          overflowX: 'hidden',
          overflowY: 'hidden',
          boxShadow:
            '0px 8px 10px -5px rgba(0,0,0,0.0), 0px 16px 24px 2px rgba(0,0,0,0.1), 0px 6px 30px 5px rgba(0,0,0,0.0)',
          width: 300,
          top: 67,
          '@media (min-width: 280px ) and (max-width: 319px)': {
            width: '270px',
          },
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
