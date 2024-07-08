'use client';
import React from 'react';
import { Box } from '@mui/system';
import { usePathname } from 'next/navigation';
import ProjectsCategoryLink from '@/src/components/projects/ProjectsCategoryLink';
import ProjectsCard from '@/src/components/projects/ProjectsCard';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import { useSelector } from 'react-redux';
import AgentProjectsChiperBack from './AgentProjectsChiperBack';
import {
  extractAgentIdCategoryIdTypeId,
  filterAgentsProjectsByTypeCategory,
} from '@/src/utils/projects/agentsProjects';

const AgentProjectsCategoryPage = () => {
  const pathname = usePathname();
  const { agentId, category, adsType } =
    extractAgentIdCategoryIdTypeId(pathname);

  const agents = useSelector((state) => state.agents);
  const projects = useSelector((state) => state.postListingAds.agentPostings);
  const filterData = filterAgentsProjectsByTypeCategory(
    projects,
    agentId,
    category,
    adsType
  );

  const currentAgent = agents?.filter(
    (item) => item?.id === parseInt(agentId)
  )[0];

  if (!agentId) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Proposal category invalid, Please add correct id.'}
      />
    );
  }

  if (!filterData || filterData.length === 0) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'No projects found for this category and agent.'}
      />
    );
  }

  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <AgentProjectsChiperBack
        backText={'Back'}
        backLink={`/profile/${currentAgent?.id}/projects/${adsType}`}
        chipperText={`${currentAgent?.first_name} ${currentAgent?.last_name}'s ${category} for ${adsType}`}
        chipperLink={`/projects`}
      />
      <ProjectsCategoryLink category={category} />
      <ProjectsCard data={filterData} />
    </Box>
  );
};

export default AgentProjectsCategoryPage;
