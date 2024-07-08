'use client';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import UserProfileImage from '@/src/components/dashboard/UserProfileImage';
import BackToDashboard from '@/src/components/dashboard/BackToDashboard';
import PropertyDetail from '@/src/components/dashboard/preview/PropertyDetail';
import PropertyDetails from '@/src/components/Properties/PropertyDescription/PropertyDetail';
import Location from '@/src/components/dashboard/preview/Location';
import PreviewAmountAndFeature from '@/src/components/dashboard/preview/PreviewAmountAndFeature';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import BidMedia from '@/src/components/dashboard/BidMedia';
import {
  handleConnectProposal,
  handleRejectedProposal,
} from '@/src/redux/slices/proposals/proposalsSlice';

import { PREVIEW_DATA, PROPOSAL_PAGE } from '@/src/constants/Preview_Data';

import { PROPOSAL } from '@/src/constants/agent/Proposal';
import {
  checkData,
  findAgent,
  findProposalWithOutStatus,
} from '@/src/utils/dashboardUtils';

const SpacificProposal = () => {
  const { image, back_Button, applicant_Titlt, applicant_Message } =
    PROPOSAL_PAGE;
  const { areaAndAmount, location, images, videos } = PREVIEW_DATA;

  const dispatch = useDispatch();
  const pathname = usePathname();
  const segments = pathname?.split('/');
  const getproposalId = segments[segments?.length - 1];
  const proposals = useSelector((state) => state?.proposals);
  const agents = useSelector((state) => state?.agents);
  const find_proposal = findProposalWithOutStatus(getproposalId, proposals);
  const find_agent = findAgent(find_proposal?.agent_id, agents);
  console.log(find_proposal);
  const handleConnect = () => {
    dispatch(
      handleConnectProposal({
        proposal_id: find_proposal?.proposal_id,
        property_id: find_proposal?.property_id,
      })
    );
  };

  const handleReject = () => {
    dispatch(
      handleRejectedProposal({ proposal_id: find_proposal?.proposal_id })
    );
  };

  return (
    <>
      {checkData(
        find_proposal,
        find_proposal?.status,
        'Connected',
        'Rejected'
      ) ? (
        <>
          <Box sx={{ pb: 3 }}>
            <BackToDashboard
              buttonLabel={back_Button?.text}
              link={back_Button?.link}
            />
          </Box>
          <Box
            sx={{
              backgroundColor: '#fff',
              border: '1px solid #E4E4E4',
              maxWidth: { lg: '1200px' },
              height: 'auto',
            }}
          >
            <Box
              sx={{ width: '100%', borderBottom: '1px solid #E4E4E4', p: 4 }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: { xs: 'column', md: 'row' },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2.5,
                    flexDirection: { xs: 'column', md: 'row' },
                  }}
                >
                  <UserProfileImage
                    width={60}
                    height={60}
                    badgeWidth={'7px'}
                    badgeHeigth={'7px'}
                    padding={0.3}
                    right={2}
                    image={find_agent?.profile_image || image}
                    isActive={find_agent?.status || false}
                  />
                  <Box
                    sx={{
                      textAlign: { xs: 'center', md: 'left' },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '15px',
                        fontWeight: 500,
                        color: '#126FAA',
                      }}
                    >
                      {`${find_agent?.first_name || ''} ${find_agent?.last_name || ''}`}
                    </Typography>
                    <Typography>
                      <LocationOnIcon sx={{ fontSize: 28, color: '#757474' }} />
                      {`${find_agent?.city || ''} ${find_agent?.country || ''}`}{' '}
                      - 3:16pm local time
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1.5,
                    flexDirection: { xs: 'column', md: 'row' },
                    '@media (min-width: 700px) and (max-width: 950px)': {
                      flexDirection: 'row',
                    },
                  }}
                >
                  <Link href={`/user/dashboard`}>
                    <Typography
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        width: { xs: '200px', lg: '200px' },
                        height: '43.545px',
                        backgroundColor: '#fff',
                        border: '1px solid #FB631C',
                        borderRadius: '50px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#FB631C',
                        '&:hover': {
                          backgroundColor: '#FB631C',
                          color: 'white',
                        },
                      }}
                      onClick={() => handleReject()}
                    >
                      {'Reject'}
                    </Typography>
                  </Link>
                  <Link href={`/user/inbox`}>
                    <Typography
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: { xs: '200px', lg: '200px' },
                        height: '43.545px',
                        backgroundColor: '#FB631C',
                        borderRadius: '50px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#FFF',
                        '&:hover': {
                          backgroundColor: 'white',
                          color: '#FB631C',
                          border: '1px solid #FB631C',
                        },
                      }}
                      onClick={() => handleConnect()}
                    >
                      {'Connect'}
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              <Box
                sx={{
                  width: { xs: '100%', md: '330px' },
                  borderRight: { xs: '0px', md: '1px solid #E4E4E4' },
                  borderBottom: { xs: '1px solid #E4E4E4', md: '0px' },
                  p: { xs: 5, md: 3 },
                }}
              >
                <Typography sx={{ fontSize: '12px', fontWeight: 600 }}>
                  {applicant_Titlt || ''}
                </Typography>
                <Typography>{`${find_agent?.first_name || ''} ${find_agent?.last_name || ''} ${applicant_Message || ''}`}</Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: '100%', md: '80%' },
                  padding: { xs: '40px', md: '40px' },
                }}
              >
                <PropertyDetail
                  title={PropertyDetails}
                  heading={PROPOSAL?.propertyDetails}
                  subTitle={find_proposal?.title}
                  description={find_proposal?.description}
                  width={'100%'}
                  pb={'5px'}
                  pt={'0px'}
                  px={'0px'}
                  paddingHeading={'10px'}
                  subPadding={'0px'}
                />
                <Location
                  city={find_proposal?.city}
                  locationKeys={location}
                  purpose={find_proposal?.purpose}
                  propertyType={find_proposal?.propertyType}
                  proportyCategory={find_proposal?.proportyCategory}
                  location={find_proposal?.location}
                  width={'100%'}
                  widthBox={'100%'}
                  className={'locationWidth'}
                  pb={'20px'}
                  pt={'30px'}
                  px={'0px'}
                />
                <PreviewAmountAndFeature
                  area={find_proposal?.area}
                  amount={find_proposal?.amount}
                  areaUnit={find_proposal?.areaUnit}
                  areaAndAmount={areaAndAmount}
                  amountCurrency={find_proposal?.amountCurrency}
                  instalmentAvailable={find_proposal?.instalmentAvailable}
                  readyPossession={find_proposal?.readyPossession}
                  width={'100%'}
                  pb={'10px'}
                  pt={'30px'}
                  px={'0px'}
                  subPadding={'0px'}
                />
                {/* <PreviewFeatureAndAmenities
                  amenities={amenities}
                  bedrooms={find_proposal?.bedrooms}
                  bathrooms={find_proposal?.bathrooms}
                  parking={find_proposal?.parking}
                  other_features={find_proposal?.other_features}
                /> */}
                <BidMedia
                  title={images?.title}
                  media={find_proposal?.images}
                  mediaType={images?.type}
                  pb={'20px'}
                  pt={'30px'}
                  px={'0px'}
                />
                <BidMedia
                  title={videos?.title}
                  media={find_proposal?.videos}
                  mediaType={videos?.type}
                  pb={'20px'}
                  pt={'30px'}
                  px={'0px'}
                />
              </Box>
            </Box>
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

export default SpacificProposal;
