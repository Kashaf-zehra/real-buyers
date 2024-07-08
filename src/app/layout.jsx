'use client';
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import './globals.css';
import { redirect, usePathname } from 'next/navigation';

import { Provider } from 'react-redux';
import { store } from '@/src/redux/store';
import Footer from '@/src/components/layouts/Footer';
import { FOOTER_CTA_DATA, FOOTER_DATA } from '@/src/constants/Constants';
import MainHeader from '@/src/components/layouts/MainHeader';
import FooterCta from '@/src/components/layouts/FooterCta';

// Create a client
const queryClient = new QueryClient();

const RootLayout = ({ children }) => {
  const currentPath = usePathname();
  const isDashboard =
    currentPath.includes('/agent/') || currentPath.includes('/user/');

  useEffect(() => {
    if (
      currentPath === '/agent' ||
      currentPath === '/dashboard/agent' ||
      currentPath === '/dashboard/agent'
    ) {
      redirect('/agent/live-bidding');
    } else if (
      currentPath === '/user' ||
      currentPath === '/dashboard/user' ||
      currentPath === '/dashboard/user'
    ) {
      redirect('/user/dashboard');
    }
  }, [currentPath]);

  return (
    <html lang="en" cz-shortcut-listen="true">
      <body cz-shortcut-listen="true">
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {!isDashboard && <MainHeader />}
              <Box>{children}</Box>
              {!isDashboard && <FooterCta data={FOOTER_CTA_DATA} />}
              {!isDashboard && <Footer data={FOOTER_DATA} />}
            </ThemeProvider>
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
