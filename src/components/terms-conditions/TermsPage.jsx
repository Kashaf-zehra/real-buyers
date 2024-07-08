'use client';
import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import TabSelector from './TabSelector';
import TabContent from './TabContent';
import NotFoundSection from '@/src/components/global/NotFoundSection';

const TermsPage = () => {
  const terms = useSelector((state) => state?.terms?.TERM_CONDITIONS);
  const [selectedTab, setSelectedTab] = useState(terms?.content[0]);

  const handleTabClick = (tabId) => {
    const selectedTab = terms?.content?.find((tab) => tab?.id === tabId);
    if (selectedTab) {
      setSelectedTab(selectedTab);
    }
  };

  // Check if terms data is empty or undefined
  if (!terms || !terms.content || terms.content.length === 0) {
    return (
      <NotFoundSection heading={'Sorry!'} message={'No Terms Data Found.'} />
    );
  }

  return (
    <Box
      sx={{
        background: '#FFF',
        border: '2px solid #E4E4E4',
        px: '40px',
        py: '60px',
        my: '40px',
        borderRadius: '20px',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: ' #FB631C',
          fontSize: '30px',
          fontWeight: '600',
          textAlign: 'center',
          pb: '60px',
        }}
      >
        {terms?.title}
      </Typography>
      <Grid container sx={{ display: 'flex', gap: '30px' }}>
        <Grid item xs={12} sm={12} md={3}>
          <TabSelector
            terms={terms}
            selectedTab={selectedTab}
            handleTabClick={handleTabClick}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={8.2}>
          <TabContent selectedTab={selectedTab} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TermsPage;
