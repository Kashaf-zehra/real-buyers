'use client';
import React, { useState } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import BackToDashboard from '@/src/components/dashboard/BackToDashboard';
import PropertyDetail from '@/src/components/dashboard/preview/PropertyDetail';
import Location from '@/src/components/dashboard/preview/Location';
import PreviewAmountAndFeature from '@/src/components/dashboard/preview/PreviewAmountAndFeature';
import PreviewFeatureAndAmenities from '@/src/components/dashboard/preview/PreviewFeatureAndAmenities';
import UserProfileImage from '@/src/components/dashboard/UserProfileImage';
import BidMedia from '@/src/components/dashboard/BidMedia';
import Amount from '@/src/components/dashboard/preview/Amount';
import LiveBiddingPropertiesList from '@/src/components/dashboard/LiveBiddingPropertiesList';

import {
  PREVIEW_DATA,
  PROPOSAL_PAGE,
  VIEWPROPOSAL,
} from '@/src/constants/Preview_Data';

import { PROPOSAL } from '@/src/constants/agent/Proposal';
import {
  ESTIMATE_RANGE,
  postListingAdCard,
} from '@/src/constants/user/Dashboard';
import {
  findAgent,
  findSingleProposal,
  findSpecificPost,
} from '@/src/utils/dashboardUtils';

const ProposalDetail = () => {
  const [showMoreContent, setShowMoreContent] = useState(false);
  const { image, back_Proposal_Button } = PROPOSAL_PAGE;
  const { areaAndAmount, location, amenities, images, videos } = PREVIEW_DATA;
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const proposals = useSelector((state) => state?.proposals);
  const agents = useSelector((state) => state?.agents);
  const userPostings = useSelector(
    (state) => state?.postRequestAds?.userPostings
  );
  const find_proposal = findSingleProposal(id, proposals, 'Connected');
  const find_agent = findAgent(find_proposal?.agent_id, agents);
  const find_ad = findSpecificPost(userPostings, find_proposal?.property_id);

  const handleClick = () => {
    setShowMoreContent(!showMoreContent);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2.5}>
        <Grid item xs={12} md={12} lg={9.2} xl={9.2}>
          <Box sx={{ pb: 3 }}>
            <BackToDashboard
              buttonLabel={back_Proposal_Button?.text}
              link={back_Proposal_Button?.link}
            />
          </Box>
          <Box
            sx={{
              background: '#fff',
              borderRadius: '10px',
              mt: '16px',
              border: '1px solid #E4E4E4',
            }}
          >
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    flexDirection: { xs: 'column', md: 'column' },
                    p: 4,
                    pb: 5,
                    borderBottom: '1px solid #E4E4E4',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '30px',
                      fontWeight: 600,
                      textAlign: 'center',
                    }}
                  >
                    {VIEWPROPOSAL?.userRequest || ''}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '15px', md: '20px' },
                      fontWeight: 700,
                      textAlign: 'center',
                      mt: 3,
                      color: '#333333',
                      '@media (min-width: 280px) and (max-width: 350px)': {
                        textAlign: 'center',
                        fontSize: '10px',
                      },
                    }}
                  >
                    {find_ad?.title || ''}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      '@media (min-width: 280px) and (max-width: 800px)': {
                        flexDirection: 'column',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
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
                        notActive={false}
                      />
                      <Box
                        sx={{
                          marginLeft: '10px',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '15px',
                            fontWeight: 500,
                            color: '#126FAA',
                            ml: 0.5,
                          }}
                        >
                          {`${find_agent?.first_name || ''} ${find_agent?.last_name || ''}`}
                        </Typography>
                        <Typography
                          sx={{
                            color: '#757474',
                            fontSize: '15px',
                            fontWeight: 500,
                          }}
                        >
                          <LocationOnIcon
                            sx={{ fontSize: 28, color: '#757474' }}
                          />
                          {`${find_agent?.city || ''} ${find_agent?.country || ''}`}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ ml: { xs: 0, md: 0.5 } }}
                        >
                          {'Posted 39 minutes ago'}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  {find_ad && (
                    <Grid container>
                      <Grid container spacing={2}>
                        <Box
                          sx={{
                            color: '#333',
                            px: { xs: '20px', md: '20px' },
                            paddingTop: '40px',
                            paddingBottom: '20px',
                            '@media(min-width: 280px) and (max-width: 445px)': {
                              pr: '10px',
                            },
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: '500',
                              fontSize: '13.8px',
                              lineHeight: '20.52px',
                              mb: 1,
                            }}
                          >
                            {find_ad?.description}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            '@media (min-width: 280px) and (max-width: 500px)':
                              {
                                flexDirection: 'column',
                              },
                          }}
                        >
                          <LiveBiddingPropertiesList
                            city={find_ad?.city}
                            status={find_ad?.purpose}
                            location={find_ad?.location}
                            noConnects={false}
                            cardKeys={postListingAdCard}
                            justifyContent={'flex-start'}
                          />
                          <Box
                            sx={{
                              display: 'flex',
                              width: '20%',
                              '@media (min-width: 280px) and (max-width: 760px)':
                                {
                                  width: '80%',
                                },
                              '@media (min-width: 280px) and (max-width: 500px)':
                                {
                                  pl: '20px',
                                },
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                fontSize: '14px',
                                fontWeight: 600,
                                mt: '3px',
                              }}
                            >
                              {ESTIMATE_RANGE}
                            </Typography>
                            <Typography
                              sx={{
                                ml: 1,
                                fontWeight: 700,
                                color: '#333333',
                                fontSize: '20px',
                              }}
                              component={'span'}
                            >
                              {`${find_ad?.amount}`}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  )}
                  <Box>
                    <Button
                      sx={{
                        fontSize: '12px',
                        fontWeight: 500,
                        color: '#FB631C',
                        textTransform: 'math-auto',
                      }}
                      onClick={handleClick}
                    >
                      {showMoreContent
                        ? VIEWPROPOSAL?.viewLessDetails
                        : VIEWPROPOSAL?.viewMoreDetails}
                    </Button>
                  </Box>
                </Box>
                {showMoreContent && (
                  <>
                    <Location
                      city={find_ad?.city}
                      locationKeys={location}
                      purpose={find_ad?.purpose}
                      propertyType={find_ad?.propertyType}
                      propertyCategory={find_ad?.propertyCategory}
                      location={find_ad?.location}
                      width={'70%'}
                    />
                    <Amount />
                    <PreviewFeatureAndAmenities
                      amenities={amenities}
                      specificPost={find_ad}
                    />
                  </>
                )}
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRight: '1px solid #E4E4E4',
                  pt: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: 600,
                    textAlign: 'center',
                    mt: 4,
                  }}
                >
                  {VIEWPROPOSAL?.proposalDetails}
                </Typography>
                <PropertyDetail
                  heading={PROPOSAL?.propertyDetails}
                  subTitle={find_proposal?.title}
                  description={find_proposal?.description}
                  mb={'-15px'}
                />
                <Location
                  city={find_proposal?.city}
                  locationKeys={location}
                  purpose={find_proposal?.purpose}
                  propertyType={find_proposal?.propertyType}
                  propertyCategory={find_proposal?.propertyCategory}
                  location={find_proposal?.location}
                  width={'70%'}
                />
                <PreviewAmountAndFeature
                  area={find_proposal?.area}
                  amount={find_proposal?.amount}
                  areaUnit={find_proposal?.areaUnit}
                  areaAndAmount={areaAndAmount}
                  amountCurrency={find_proposal?.amountCurrency}
                  instalmentAvailable={find_proposal?.instalmentAvailable}
                  readyPossession={find_proposal?.readyPossession}
                />

                <BidMedia
                  title={images?.title}
                  media={find_proposal?.images}
                  mediaType={images?.type}
                />
                <BidMedia
                  title={videos?.title}
                  media={find_proposal?.videos}
                  mediaType={videos?.type}
                />
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProposalDetail;
