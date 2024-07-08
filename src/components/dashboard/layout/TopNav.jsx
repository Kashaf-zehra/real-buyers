import { Box } from '@mui/material';
import ResponsiveNavbar from './AppBar';

export const TopNav = (props) => {
  const { onNavOpen } = props;
  return (
    <>
      <Box
        component="header"
        sx={{
          position: 'sticky',
          backgroundColor: '#fff',
          top: 0,
          width: '100%',
          height: { xs: 66, sm: 66 },
          zIndex: 500,
        }}
      >
        <ResponsiveNavbar openSidebar={onNavOpen} />
      </Box>
    </>
  );
};
