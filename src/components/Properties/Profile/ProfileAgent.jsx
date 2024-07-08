import React from 'react';
import { Grid, Box } from '@mui/material';

import Price from './PropertyPrice';
import AgentDescription from './AgentDescription';
import ViewAgentProfile from './ViewAgentProfile';
import { PROPERTY_ESTATE } from '@/src/constants/Properties';

const ProfileAgent = ({ data, agentData }) => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          paddingBottom: { xs: '30px', md: '0px' },
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: '270px',
              sm: '400px',
              lg: '400px',
            },
            height: 550,
            background: 'white',
            borderRadius: 8,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'left',
            padding: 4,
            gap: 1,
            marginTop: '38px',
            mx: { xs: 'auto', md: '0px' },
          }}
        >
          <Price
            price={data?.amount}
            link={`/inbox/${agentData?.id}`}
            pkr={data?.amountCurrency}
            reach={PROPERTY_ESTATE?.propertyDetails?.reach}
            message={PROPERTY_ESTATE?.propertyDetails?.message}
          />
          <ViewAgentProfile
            image={agentData?.profile_image}
            name={`${agentData?.first_name} ${agentData?.last_name} `}
            link={`/profile/${agentData?.id}`}
          />
          <AgentDescription description={agentData?.shortintro} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfileAgent;
