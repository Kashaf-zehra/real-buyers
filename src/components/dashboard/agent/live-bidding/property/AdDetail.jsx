'use client';
import React from 'react';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import RightSection from '@/src/components/dashboard/user/dashboard/RightSection';
import BiddingProfile from '@/src/components/dashboard/agent/live-bidding/BiddingProfile';
import PreviewAmountAndFeature from '@/src/components/dashboard/preview/PreviewAmountAndFeature';
import PreviewFeatureAndAmenities from '@/src/components/dashboard/preview/PreviewFeatureAndAmenities';

import PropertyDetail from '@/src/components/dashboard/preview/PropertyDetail';
import Location from '@/src/components/dashboard/preview/Location';
import NotFoundSection from '@/src/components/global/NotFoundSection';

import { PREVIEW_DATA } from '@/src/constants/Preview_Data';
import { clientRequirment } from '@/src/constants/agent/Live_Bidding';
import { findSpecificPost } from '@/src/utils/dashboardUtils';

const AdDetail = () => {
  const { location, areaAndAmount, amenities } = PREVIEW_DATA;

  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const userPostings = useSelector(
    (state) => state?.postRequestAds?.userPostings
  );
  const specificPost = findSpecificPost(userPostings, id);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2.5}>
        <Grid item xs={12} md={12} lg={12} xl={9.34}>
          {specificPost?.property_id !== undefined ? (
            <Box
              sx={{
                background: '#fff',
                borderRadius: '10px',
                mt: '16px',
                border: '1px solid #E4E4E4',
              }}
            >
              <Grid container>
                <Grid item xs={12} md={8.5} xl={9.5}>
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
                        fontSize: '20px',
                        fontWeight: 600,
                        textAlign: 'center',
                      }}
                    >
                      {clientRequirment?.title}
                    </Typography>
                    <PropertyDetail
                      subTitle={specificPost?.title}
                      fontStyle={'16px'}
                      description={specificPost?.description}
                    />
                    <Location
                      city={specificPost?.city}
                      locationKeys={location}
                      purpose={specificPost?.purpose}
                      propertyType={specificPost?.propertyType}
                      propertyCategory={specificPost?.propertyCategory}
                      location={specificPost?.location}
                      width={'70%'}
                    />
                    <PreviewAmountAndFeature
                      area={specificPost?.area}
                      amount={specificPost?.amount}
                      areaUnit={specificPost?.areaUnit}
                      areaAndAmount={areaAndAmount}
                      amountCurrency={specificPost?.amountCurrency}
                      instalmentAvailable={specificPost?.instalmentAvailable}
                      readyPossession={specificPost?.readyPossession}
                    />
                    <PreviewFeatureAndAmenities
                      amenities={amenities}
                      specificPost={specificPost}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={3.5} xl={2.5}>
                  <Box
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderBottom: '1px solid #E4E4E4',
                      px: { xs: 4, md: 3 },
                      pb: 0.8,
                      pt: 7,
                    }}
                  >
                    <RightSection
                      // proposals={sendProposals}
                      specificPost={specificPost}
                      postId={specificPost?.property_id}
                      rightSectionKeys={clientRequirment}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <NotFoundSection
              heading={'Sorry!'}
              message={'Property id invalid, Please add correct id.'}
            />
          )}
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={2.64}>
          <BiddingProfile />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdDetail;
