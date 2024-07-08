'use client';
import React from 'react';
import { Box, Grid } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { findSelectedAgent } from '@/src/utils/projects/agentsProjects';
import { findSelectedProject } from '@/src/utils/projects/projects';
import Sliders from '@/src/components/Properties/Slider/Slider';
import PropertyDetails from '@/src/components/global/PropertyDetail';
import ProfileAgent from '@/src/components/Properties/Profile/ProfileAgent';
import PropertySlider from '@/src/components/AgentProfile/PropertySlider';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import Heading from '@/src/components/global/Heading';

function ProjectsSinglePage() {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const properties = useSelector((state) => state.postListingAds.newPostings);
  const agents = useSelector((state) => state.agents);
  const selectedProject = findSelectedProject(properties, id);
  const selectedAgent = findSelectedAgent(agents, selectedProject);
  const selectedProjectinArea = properties?.filter(
    (project) =>
      project?.location == selectedProject?.location &&
      project?.property_id != selectedProject?.property_id &&
      project?.status === 'submit'
  );

  if (isNaN(id) || id === undefined || id === null) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Property id invalid, Please add correct id.'}
      />
    );
  }
  if (!selectedProject) {
    return (
      <NotFoundSection
        heading={'Sorry'}
        message={`This property doesnt exist. Please add correct id.`}
      />
    );
  }

  return (
    <>
      <Grid
        container
        sx={{ paddingTop: '40px', display: 'flex', justifyContent: 'center' }}
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
          }}
        >
          <Sliders propertySlider={selectedProject} />
          <PropertyDetails propertyDetailsData={selectedProject} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProfileAgent data={selectedProject} agentData={selectedAgent} />
        </Grid>
        <Grid Grid item xs={12} sx={{ pb: '30px' }}>
          <Box py={3}>
            <Heading
              heading={`Similar Properties around  ${selectedProject?.location}`}
              textAlign={'center'}
            />
          </Box>
          <PropertySlider data={selectedProjectinArea} />
        </Grid>
      </Grid>
    </>
  );
}

export default ProjectsSinglePage;
