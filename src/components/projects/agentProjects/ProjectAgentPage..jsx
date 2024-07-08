'use client';
import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import CategoryLink from '@/src/components/projects/CategoryLink';
import ProjectsSlider from '@/src/components/projects/ProjectsSlider';
import ChiperBack from './ChiperBack';
import { usePathname } from 'next/navigation';
import NotFoundSection from '@/src/components/global/NotFoundSection';
// Other imports...

const ProjectAgentPage = () => {
  const pathname = usePathname();
  const segments = pathname.split(`/`);
  const agentId = segments[segments.length - 2];
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

  const filterData = projects?.filter(
    (item) => item?.agent_id === parseInt(agentId)
  );

  if (filterData?.length === 0) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'No projects found for this agent.'}
      />
    );
  }

  const renderProjects = (category, type) => (
    <>
      <CategoryLink
        category={`${category} for ${type}`}
        link={`/profile/${agentId}/projects/${type}/${category?.toLowerCase()}`}
        linkText={'See All'}
      />
      <ProjectsSlider data={filterData} category={category?.toLowerCase()} />
    </>
  );

  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <ChiperBack
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

export default ProjectAgentPage;
