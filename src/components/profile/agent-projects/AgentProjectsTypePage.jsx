// AgentProjectsTypePage.js
'use client';
import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import {
  extractAgentIdTypeId,
  filterAgentsProjectsByType,
} from '@/src/utils/projects/agentsProjects';
import { capitalizeFirstLetter } from '@/src/utils/projects/projects';
import { usePathname } from 'next/navigation';
import ProjectsCategoryLink from '@/src/components/projects/ProjectsCategoryLink';
import ProjectsSlider from '@/src/components/projects/ProjectsSlider';
import AgentProjectsChiperBack from './AgentProjectsChiperBack';
import NotFoundSection from '@/src/components/global/NotFoundSection';

const AgentProjectsTypePage = () => {
  const pathname = usePathname();
  const { agentId, adsType, capAdsType } = extractAgentIdTypeId(pathname);
  const agents = useSelector((state) => state.agents);
  const currentAgent = agents?.filter(
    (item) => item?.id === parseInt(agentId)
  )[0];

  const projects = useSelector((state) => state.postListingAds.agentPostings);
  const filterData = filterAgentsProjectsByType(projects, agentId, capAdsType);

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
      <ProjectsCategoryLink
        category={category}
        link={`/profile/${currentAgent?.id}/projects/${adsType}/${category?.toLowerCase()}`}
        linkText={'See All'}
      />
      <ProjectsSlider data={filterData} category={category?.toLowerCase()} />
    </>
  );

  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <AgentProjectsChiperBack
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

export default AgentProjectsTypePage;
