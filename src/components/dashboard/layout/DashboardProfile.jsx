import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Button, Divider, Grid } from '@mui/material';

import UserProfileImage from '../UserProfileImage';
import UserProfileDetails from '../UserProfileDetails';
import { LOAD_MORE, SHOW_LESS } from '@/src/constants/Nav_Data';

const DashboardProfile = ({
  proposalData,
  ViewText,
  ViewLink,
  Height,
  image,
}) => {
  const [showAllItems, setShowAllItems] = useState(false);

  const handleShowMoreClick = () => {
    setShowAllItems(true);
  };
  const handleShowLessClick = () => {
    setShowAllItems(false);
  };

  return (
    <Box className="scrollable" sx={{ height: Height }}>
      <>
        {proposalData
          ?.slice(0, showAllItems ? proposalData.length : 2)
          .map((item, index) => (
            <>
              <Box
                key={index}
                sx={{
                  padding: '44px 54px 44px 54px',
                  '@media(min-width: 280px) and (max-width: 445px)': {
                    justifyContent: 'center',
                  },
                }}
              >
                <Grid container>
                  <Grid
                    item
                    xl={2}
                    lg={2}
                    md={2}
                    sm={3.5}
                    xs={12}
                    sx={{
                      position: 'relative',
                      width: '156px',
                      height: '156px',
                      display: 'flex',
                      '@media(min-width: 280px) and (max-width: 445px)': {
                        justifyContent: 'center',
                      },
                    }}
                  >
                    <UserProfileImage
                      badgeWidth={'13px'}
                      badgeHeigth={'13px'}
                      right={20}
                      image={image}
                      padding={0.5}
                      width={165}
                      height={156}
                      isActive={false}
                    />
                  </Grid>
                  <Grid
                    item
                    xl={10}
                    lg={10}
                    md={10}
                    sm={8.5}
                    xs={12}
                    sx={{
                      pl: { sm: 0, md: 2 },
                      '@media(min-width: 280px) and (max-width: 445px)': {
                        display: 'flex',
                        justifyContent: 'center',
                      },
                      '@media(min-width: 600px) and (max-width: 730px)': {
                        pl: '10%',
                      },
                      '@media(min-width: 960px) and (max-width: 1260px)': {
                        pl: '8%',
                      },
                    }}
                  >
                    <UserProfileDetails
                      adId={item?.adId}
                      text={ViewText}
                      link={ViewLink}
                      Title={item?.title}
                      Amount={item?.amount}
                      Location={item?.location}
                      Description={item?.description}
                      proposalId={item?.proposalId}
                    />
                  </Grid>
                </Grid>
              </Box>
              {index == proposalData.length - 1 ? null : <Divider />}
            </>
          ))}
        {!showAllItems && (
          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            <Button
              onClick={handleShowMoreClick}
              sx={{
                margin: 'auto',
                color: '#1176AD',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '24.2px',
              }}
            >
              {LOAD_MORE}
            </Button>
          </Box>
        )}
        {showAllItems && (
          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            <Button
              onClick={handleShowLessClick}
              sx={{
                margin: 'auto',
                color: '#1176AD',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '24.2px',
              }}
            >
              {SHOW_LESS}
            </Button>
          </Box>
        )}
      </>
    </Box>
  );
};

export default DashboardProfile;
