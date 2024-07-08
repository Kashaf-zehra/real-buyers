'use client';
import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { capitalizeFirstLetter } from '@/src/utils/projects/projects';
import CategoryLink from '@/src/components/projects/CategoryLink';
import ProjectsSlider from '@/src/components/projects/ProjectsSlider';
import ChiperBack from './ChiperBack';
import NotFoundSection from '@/src/components/global/NotFoundSection';

const TypeAgentPage = () => {
  const pathname = usePathname();
  const segments = pathname.split(`/`);
  const agentId = segments[segments.length - 3];
  const adsType = segments[segments.length - 1];
  const capAdsType = adsType.charAt(0).toUpperCase() + adsType.slice(1);
  const agents = useSelector((state) => state.agents);
  const currentAgent = agents?.filter(
    (item) => item?.id === parseInt(agentId)
  )[0];

  const projects = useSelector((state) => state.postListingAds.agentPostings);
  const filterData = projects?.filter(
    (item) => item?.agent_id == agentId && item?.purpose === capAdsType
  );

  // Validate agentId
  if (!agentId || !currentAgent) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Invalid agent ID. Please provide a valid ID.'}
      />
    );
  }

  if (!filterData || filterData.length === 0) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'No projects found for this agent and type.'}
      />
    );
  }

  const renderProjects = (category) => (
    <>
      <CategoryLink
        category={category}
        link={`/profile/${currentAgent?.id}/projects/${adsType}/${category?.toLowerCase()}`}
        linkText={'See All'}
      />
      <ProjectsSlider data={filterData} category={category?.toLowerCase()} />
    </>
  );

  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <ChiperBack
        backText={'Back'}
        backLink={`/profile/${currentAgent?.id}/projects`}
        chipperText={`${currentAgent?.first_name} ${currentAgent?.last_name}'s Properties for ${capitalizeFirstLetter(adsType)}`}
        chipperLink={`/projects`}
      />
      {renderProjects('Houses')}
      {renderProjects('Plots')}
      {renderProjects('Commercials')}
    </Box>
  );
};

export default TypeAgentPage;
