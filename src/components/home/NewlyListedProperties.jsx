'use client';
import React from 'react';
import { Box } from '@mui/material';

import Heading from './Heading';
import PropertySlider from '../AgentProfile/PropertySlider';
import { FEATURED_HEADINGS } from '@/src/constants/Home';
import { useSelector } from 'react-redux';

const NewlyListedProperties = () => {
  const NewProjects = useSelector((state) => state.postListingAds.newPostings);
  return (
    <>
      <Box>
        <Box
          sx={{
            pt: '14px',
            textAlign: 'center',
            backgroundImage: `url('/images/bgs/featured-properties-background.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <Heading
            heading={FEATURED_HEADINGS.listedProperty}
            paragraph={FEATURED_HEADINGS.latestProject}
          />
          <Box
            sx={{
              pt: { xs: '50px', md: '67px' },
              pb: { xs: '45px', sm: '50px', md: '60px', lg: '75px' },
              px: '15%',
            }}
          >
            <PropertySlider data={NewProjects} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewlyListedProperties;
