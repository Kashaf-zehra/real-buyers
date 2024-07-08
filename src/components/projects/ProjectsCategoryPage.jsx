'use client';
import React from 'react';
import { Box } from '@mui/system';
import { usePathname } from 'next/navigation';
import ProjectsCategoryLink from '@/src/components/projects/ProjectsCategoryLink';
import ProjectsCard from '@/src/components/projects/ProjectsCard';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import { useSelector } from 'react-redux';
import ProjectsFilterComponent from './ProjectsFilterComponent';
import AgentProjectsChiperBack from '../profile/agent-projects/AgentProjectsChiperBack';

const ProjectsCategoryPage = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const capID = id.charAt(0).toUpperCase() + id.slice(1);

  const projects = useSelector((state) => state.postListingAds.agentPostings);
  const NoData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const filterData = projects?.filter(
    (item) => item?.propertyCategory === capID && item?.status === 'submit'
  );
  const filteredData = filterData?.length ? filterData : NoData;

  if (!id) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Proposal category invalid, Please add correct id.'}
      />
    );
  }
  if (!filteredData || filteredData.length === 0) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Proposal category invalid, Please add correct id.'}
      />
    );
  }

  return (
    <Box className="min-h-screen" sx={{ py: '20px' }}>
      <Box sx={{ pb: '80px' }}>
        <AgentProjectsChiperBack backText={'Back'} backLink={`/projects/`} />
        <ProjectsFilterComponent data={filteredData} />
      </Box>
      <ProjectsCategoryLink category={id} />
      <ProjectsCard data={filteredData} />
    </Box>
  );
};

export default ProjectsCategoryPage;
