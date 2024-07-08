'use client';
import React from 'react';
import { Box } from '@mui/system';

import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import RecentPropertyTitle from '@/src/components/AgentProfile/RecentPropertyTitle';
import AgentProperties from '@/src/components/AgentProfile/AgentProperties';
import AgentAbout from '@/src/components/AgentProfile/AgentProfileAbout';
import AgentProfiles from '@/src/components/AgentProfile/AgentProfiles';
import AgentSlider from '@/src/components/AgentProfile/PropertySlider';
import NotFoundSection from '@/src/components/global/NotFoundSection';

const ProfileSinglePage = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const users = useSelector((state) => state?.agents);
  const user = users?.find((item) => parseInt(item?.id) === parseInt(id)) || {};
  const projects = useSelector((state) => state.postListingAds.agentPostings);
  const selectedProjectbyAgent = projects?.filter(
    (project) => project?.user_id == user?.id && project?.status === 'submit'
  );

  function filterProjects(projects, agentId, purpose) {
    return projects?.filter(
      (item) =>
        item?.user_id === agentId &&
        item?.purpose === purpose &&
        item?.status === 'submit'
    ).length;
  }

  function filterProjectsWith(projects, agentId, purpose, propertyCategory) {
    return projects?.filter(
      (item) =>
        item?.user_id === agentId &&
        item?.purpose === purpose &&
        item?.propertyCategory === propertyCategory &&
        item?.status === 'submit'
    ).length;
  }

  const allProperties = projects?.filter(
    (item) => item?.user_id === user?.id && item?.status === 'submit'
  ).length;
  const forSellCount = filterProjects(projects, user?.id, 'Sell');
  const forSellHouses = filterProjectsWith(
    projects,
    user?.id,
    'Sell',
    'Houses'
  );
  const forSellPlots = filterProjectsWith(projects, user?.id, 'Sell', 'Plots');
  const forSellCommercials = filterProjectsWith(
    projects,
    user?.id,
    'Sell',
    'Commercials'
  );
  const forRentCount = filterProjects(projects, user?.id, 'Rent');
  const forRentHouses = filterProjectsWith(
    projects,
    user?.id,
    'Rent',
    'Houses'
  );
  const forRentPlots = filterProjectsWith(projects, user?.id, 'Rent', 'Plots');
  const forRentCommercials = filterProjectsWith(
    projects,
    user?.id,
    'Rent',
    'Commercials'
  );

  const sellData = [forSellHouses, forSellPlots, forSellCommercials];
  const rentData = [forRentHouses, forRentPlots, forRentCommercials];

  // Validate user
  if (!user || Object.keys(user).length === 0) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={
          'No agent found. Please make sure to provide a valid agent ID.'
        }
      />
    );
  }

  return (
    <>
      <Box
        sx={{
          mx: 'auto',
          mb: 16,
          mt: 4,
          width: '70vw',
        }}
      >
        <>
          <AgentProfiles
            data={user}
            forRentCount={forRentCount}
            forSellCount={forSellCount}
          />
          <AgentProperties
            data={user}
            allLink={`/profile/${id}/projects`}
            sellLink={`/profile/${id}/projects/sell`}
            rentLink={`/profile/${id}/projects/rent`}
            allProperties={allProperties}
            forRentCount={forRentCount}
            forSellCount={forSellCount}
            sellData={sellData}
            rentData={rentData}
          />
          <AgentAbout data={user} />
          <RecentPropertyTitle data={user} />
          <AgentSlider data={selectedProjectbyAgent} />
        </>
      </Box>
    </>
  );
};

export default ProfileSinglePage;
