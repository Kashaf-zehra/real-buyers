'use client';
import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import ProjectsCategoryLink from '@/src/components/projects/ProjectsCategoryLink';
import AgentProjectsChiperBack from './AgentProjectsChiperBack';
import { usePathname } from 'next/navigation';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import ProjectsTypeSlider from '../../projects/ProjectsTypeSlider';
import {
  extractAgentId,
  filterAgentsProjects,
} from '@/src/utils/projects/agentsProjects';

const AgentProjectPage = () => {
  const pathname = usePathname();
  const agentId = extractAgentId(pathname);
  const projects = useSelector((state) => state.postListingAds.agentPostings);
  const agents = useSelector((state) => state.agents);
  const currentAgent = agents?.find(({ id }) => `${id}` === agentId);

  if (!agentId || !currentAgent || !Array.isArray(projects)) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Invalid agent ID or no projects found.'}
      />
    );
  }

  const filterData = filterAgentsProjects(projects, agentId);

  if (filterData?.length === 0) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'No projects found for this agent?.'}
      />
    );
  }

  const renderProjects = (category, type) => (
    <>
      <ProjectsCategoryLink
        category={`${category} for ${type}`}
        link={`/profile/${agentId}/projects/${type}/${category?.toLowerCase()}`}
        linkText={'See All'}
      />
      <ProjectsTypeSlider
        data={filterData}
        category={category?.toLowerCase()}
        type={type?.toLowerCase()}
      />
    </>
  );

  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <AgentProjectsChiperBack
        backText={'Back'}
        backLink={`/profile/${currentAgent?.id}`}
        chipperText={`${currentAgent?.first_name} ${currentAgent?.last_name}'s Properties`}
        chipperLink={`/projects`}
      />
      {renderProjects('Houses', 'Sale')}
      {renderProjects('Plots', 'Sale')}
      {renderProjects('Commercials', 'Sale')}
      {renderProjects('Houses', 'Rent')}
      {renderProjects('Plots', 'Rent')}
      {renderProjects('Commercials', 'Rent')}
    </Box>
  );
};

export default AgentProjectPage;
