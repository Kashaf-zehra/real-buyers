'use client';
import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import ProjectsCategoryLink from '@/src/components/projects/ProjectsCategoryLink';
import ProjectsSlider from '@/src/components/projects/ProjectsSlider';
import ProjectsFilterComponent from './ProjectsFilterComponent';
import NotFoundSection from '@/src/components/global/NotFoundSection';

const ProjectsPage = () => {
  const { agentPostings: projects } = useSelector(
    (state) => state.postListingAds
  );

  if (!projects || projects.length === 0) {
    return (
      <NotFoundSection heading={'Sorry!'} message={'No Properties Found.'} />
    );
  }

  const renderProjectCategory = (category, link, linkText) => (
    <Box>
      <ProjectsCategoryLink
        category={category}
        link={`/projects/category/${link}`}
        linkText={linkText}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginLeft: '15px',
        }}
      >
        <ProjectsSlider data={projects} category={link} />
      </Box>
    </Box>
  );

  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <Box sx={{ pb: '100px' }}>
        <ProjectsFilterComponent data={projects} />
      </Box>
      {renderProjectCategory('Houses', 'houses', 'See All')}
      {renderProjectCategory('Plots', 'plots', 'See All')}
      {renderProjectCategory('Commercials', 'commercials', 'See All')}
    </Box>
  );
};

export default ProjectsPage;
