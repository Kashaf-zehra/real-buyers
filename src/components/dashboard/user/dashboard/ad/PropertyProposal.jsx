'use client';
import React from 'react';
import { Box, Divider } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import ProposalDetails from '@/src/components/dashboard/ProposalDetails';
import DashboardTitle from '@/src/components/dashboard/user/dashboard/DashboardTitle';
import BackToDashboard from '@/src/components/dashboard/BackToDashboard';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import ProposalAgentProfile from '@/src/components/dashboard/ProposalAgentProfile';
import { PROPOSAL_PAGE } from '@/src/constants/Preview_Data';
import { checkProposal, findSpecificPost } from '@/src/utils/dashboardUtils';

const PropertyProposal = () => {
  const { image, back_Button, view_Button, title } = PROPOSAL_PAGE;
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const userPostings = useSelector(
    (state) => state?.postRequestAds?.userPostings
  );
  const proposals = useSelector((state) => state?.proposals);
  const specificPost = findSpecificPost(userPostings, id);
  const find_proposals = checkProposal(
    specificPost?.property_id,
    proposals,
    'Submited'
  );

  return (
    <>
      {specificPost !== undefined &&
      specificPost !== null &&
      find_proposals?.length > 0 ? (
        <>
          <BackToDashboard
            buttonLabel={back_Button?.text}
            link={back_Button?.link}
          />
          <DashboardTitle
            title={title}
            mt={'20px'}
            fontSize={'30px'}
            ml={'57px'}
            marginProposal={'10px'}
          />
          <Box
            sx={{
              background: '#fff',
              borderRadius: '10px',
              border: '1px solid #E4E4E4',
              mt: 6,
              mb: 6,
              mx: { xs: 'auto', lg: 0 },
              width: { xs: '100%', lg: '1200px' },
              '@media (min-width: 1440px) and (max-width: 1568px)': {
                width: '100%',
              },
              '@media (min-width: 960px) and (max-width: 1439px)': {
                width: '90%',
              },
            }}
          >
            <ProposalDetails
              city={specificPost?.city}
              area={specificPost?.area}
              location={specificPost?.location}
              title={specificPost?.title}
              amount={specificPost?.amount}
              status={specificPost?.purpose}
              proposal={specificPost?.proposals?.length}
              postedTime={specificPost?.posted_Time}
              description={specificPost?.description}
            />
            <Divider />
            <ProposalAgentProfile
              proposalData={find_proposals || ''}
              image={image}
              ViewText={view_Button?.text}
              ViewLink={view_Button?.link}
              Height={'1420px'}
            />
          </Box>
        </>
      ) : (
        <NotFoundSection
          heading={'Sorry!'}
          message={'Property id invalid, Please add correct id.'}
        />
      )}
    </>
  );
};

export default PropertyProposal;
