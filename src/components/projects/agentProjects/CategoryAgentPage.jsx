'use client';
import React from 'react';
import { Box } from '@mui/system';
import { usePathname } from 'next/navigation';
import { capitalizeFirstLetter } from '@/src/utils/projects/projects';
import { useSelector } from 'react-redux';
import CategoryLink from '@/src/components/projects/CategoryLink';
import ProjectsCard from '@/src/components/projects/ProjectsCard';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import ChiperBack from './ChiperBack';

const CategoryAgentPage = () => {
  const pathname = usePathname();
  const segments = pathname.split(`/`);
  const agentId = segments[segments.length - 4];
  const category = segments[segments.length - 1];
  const capCategory = category?.charAt(0).toUpperCase() + category?.slice(1);
  const adsType = segments[segments.length - 2];
  const capAdsType = adsType.charAt(0).toUpperCase() + adsType.slice(1);
  const agents = useSelector((state) => state.agents);
  const currentAgent = agents?.filter(
    (item) => item?.id === parseInt(agentId)
  )[0];
  const projects = useSelector((state) => state.postListingAds.agentPostings);
  const filterData = projects?.filter(
    (item) =>
      item?.agent_id == agentId &&
      item?.propertyCategory === capCategory &&
      item?.purpose === capAdsType
  );

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
      <ChiperBack
        backText={'Back'}
        backLink={`/profile/${currentAgent?.id}/projects/${adsType}`}
        chipperText={`${currentAgent?.first_name} ${currentAgent?.last_name}'s ${capitalizeFirstLetter(category)} for ${capitalizeFirstLetter(adsType)}`}
        chipperLink={`/projects`}
      />
      <CategoryLink category={category} />
      <ProjectsCard data={filterData} />
    </Box>
  );
};

export default CategoryAgentPage;
