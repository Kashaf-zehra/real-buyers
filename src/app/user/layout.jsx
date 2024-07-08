'use client';
import { Box } from '@mui/material';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';

import { TopNav } from '@/src/components/dashboard/layout/TopNav';
import { SideNav } from '@/src/components/dashboard/layout/SideNav';

import { SIDE_NAV_WIDTH } from '@/src/constants/sidebar';
import Loading from '@/src/components/Loading';

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH,
  },
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
});

const Layout = ({ children }) => {
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(true);
  const [child, setChild] = useState(false);

  const handlePathnameChange = useCallback(() => {
    if (openNav) {
      setOpenNav(false);
    }
  }, [openNav]);

  useEffect(() => {
    handlePathnameChange();
  }, [pathname]);

  useEffect(() => {
    setChild(!child);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        {child && (
          <>
            <TopNav onNavOpen={() => setOpenNav(true)} />
            <SideNav onClose={() => setOpenNav(false)} open={openNav} />
            <LayoutRoot>
              <LayoutContainer>
                <Box sx={{ height: '100%', position: 'relative' }}>
                  <Box
                    sx={{
                      top: 0,
                      height: 'auto',
                      position: 'relative',
                      backgroundColor: '#F4F5F7',
                      '@media (max-width: 400px)': {
                        px: '12px',
                        py: '30px',
                      },
                      px: {
                        xs: '20px',
                        sm: '30px',
                        md: '50px',
                        lg: '30px',
                      },
                      pt: {
                        xs: '40px',
                        sm: '50px',
                      },
                      pb: {
                        xs: '40px',
                        sm: '50px',
                      },
                    }}
                  >
                    {child && children}
                  </Box>
                </Box>
              </LayoutContainer>
            </LayoutRoot>
          </>
        )}
      </Suspense>
    </>
  );
};

export default Layout;
