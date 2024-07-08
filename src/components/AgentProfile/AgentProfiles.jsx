import React from 'react';
import { Box, Grid } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import AgentImage from './Profile/AgentImage';
import AgentProfileDetail from './Profile/AgentProfileDetail';
import LetsTalk from './Profile/LetsTalk';
import { LETS_TALK } from '@/src/constants/profile/agent-projects/AgentProfile';

const AgentProfiles = ({ data, setFieldValue }) => {
  const path = usePathname();
  const user_profile = 'user-profile';
  const agent_profile = 'agent-profile';
  const projects = useSelector((state) => state.postListingAds.agentPostings);

  function filterProjects(projects, agentId, purpose) {
    return projects?.filter(
      (item) =>
        item?.user_id === agentId &&
        item?.purpose === purpose &&
        item?.status === 'submit'
    ).length;
  }
  const forSellCount = filterProjects(projects, data.id, 'Sell');
  const forRentCount = filterProjects(projects, data.id, 'Rent');

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        background:
          'linear-gradient(180deg, rgba(75, 183, 255, 0.16) 0%, rgba(75, 183, 255, 0.04) 54.17%)',
      }}
    >
      <Box
        sx={{
          display: { xs: 'block', sm: 'flex' },
          position: 'relative',
          padding: { xs: 2, sm: 0 },
          '@media (min-width: 280px) and (max-width: 319px)': {
            padding: 0,
          },
        }}
      >
        <AgentImage data={data} setFieldValue={setFieldValue} />
        <Grid
          sx={{
            padding: 2,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid
            container
            justifyContent="space-between"
            sx={{
              height: 'auto',
              width: '100%',
            }}
          >
            <AgentProfileDetail
              data={data}
              path={path}
              user={user_profile}
              agent={agent_profile}
              forSellCount={forSellCount}
              forRentCount={forRentCount}
            />
            {path?.includes(user_profile) ||
            path?.includes(agent_profile) ? null : (
              <LetsTalk text={LETS_TALK} data={data} />
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AgentProfiles;
