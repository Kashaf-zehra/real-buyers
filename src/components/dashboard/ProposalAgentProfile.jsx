import React from 'react';
import { Box } from '@mui/system';
import { Divider, Grid } from '@mui/material';

import UserProfileDetails from './UserProfileDetails';

const ProposalAgentProfile = ({
  proposalData,
  ViewText,
  ViewLink,
  Height,
  image,
}) => {
  return (
    <Box className="scrollable" sx={{ maxHeight: Height }}>
      <>
        {proposalData?.map((item, index) => (
          <Box key={index}>
            <Box
              key={index}
              sx={{
                padding: '44px 54px 44px 54px',
              }}
            >
              <Grid container>
                <Grid
                  item
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  sx={{
                    height: { xs: '550px', md: '180px' },
                    marginTop: '15px',
                  }}
                >
                  <UserProfileDetails
                    adId={item?.property_id}
                    text={ViewText}
                    link={ViewLink}
                    Title={item?.title}
                    image={image}
                    Amount={item?.amount}
                    amountCurrency={item?.amountCurrency}
                    Location={item?.location}
                    Description={item?.description}
                    proposalId={item?.proposal_id}
                    agentId={item?.agent_id}
                  />
                </Grid>
              </Grid>
            </Box>
            {index == proposalData.length - 1 ? null : <Divider />}
          </Box>
        ))}
      </>
    </Box>
  );
};

export default ProposalAgentProfile;
