'use client';
import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import CategoryLink from '@/src/components/projects/CategoryLink';
import ProjectsSlider from '@/src/components/projects/ProjectsSlider';
import FilterComponent from './FilterComponent';

const ProjectPage = () => {
  const { agentPostings: projects } = useSelector(
    (state) => state.postListingAds
  );

  const renderCategory = (category, categoryName) => {
    return (
      <>
        <CategoryLink
          category={categoryName}
          link={`/projects/category/${category}`}
          linkText={'See All'}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '15px',
          }}
        >
          <ProjectsSlider data={projects} category={category} />
        </Box>
      </>
    );
  };

  return (
    <>
      <Box className="min-h-screen" sx={{ py: '80px' }}>
        <FilterComponent data={projects} />

        {renderCategory('houses', 'Houses')}
        {renderCategory('plots', 'Plots')}
        {renderCategory('commercials', 'Commercials')}
      </Box>
    </>
  );
};

export default ProjectPage;
