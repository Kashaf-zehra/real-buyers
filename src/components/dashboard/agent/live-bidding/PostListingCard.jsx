'use client';
import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import {
  ESTIMATE_RANGE,
  LOAD_MORE,
  SHOW_LESS,
  VIEW_BUTTON,
} from '@/src/constants/agent/Live_Bidding';

import NotFoundSection from '@/src/components/global/NotFoundSection';
import LiveBiddingPropertiesList from '../../LiveBiddingPropertiesList';
import { postListingAdCard } from '@/src/constants/user/Dashboard';
import { checkProposal, searching } from '@/src/utils/dashboardUtils';
import { formatDistanceToNow } from 'date-fns';

const PostListingCard = ({ height, ads }) => {
  const all_proposals = useSelector((state) => state?.proposals);
  const searchValue = useSelector((state) => state?.search?.searchValue);
  const [showAllItems, setShowAllItems] = useState(false);
  let filteredAds = ads;

  if (searchValue) {
    filteredAds = searching(ads, searchValue);
  }

  const handleShowMoreClick = () => {
    setShowAllItems(true);
  };
  const handleShowLessClick = () => {
    setShowAllItems(false);
  };

  return (
    <>
      {ads?.length <= 0 ? (
        <NotFoundSection heading={'Sorry!'} message={'No users ads'} />
      ) : (
        <Box className="scrollable" sx={{ maxHeight: height }}>
          <>
            {filteredAds?.length > 0 ? (
              filteredAds
                ?.slice(0, showAllItems ? filteredAds?.length : 3)
                ?.map((item, index) => (
                  <Grid item container xs={12} key={index}>
                    <Box
                      sx={{
                        width: '100%',
                        minHeight: '350px',
                        height: 'auto',
                        backgroundColor: '#EDF7FF',
                        border: '1px solid #AAD9FF',
                        borderRadius: '16px',
                        position: 'relative',
                        mb: 2.8,
                        zIndex: 1,
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          height: '100%',
                          background: '#F6FBFF',
                          zIndex: -1,
                          left: 0,
                          width: {
                            sm: '240px',
                            md: '280px',
                            lg: '319px',
                          },
                          borderRadius: '40px 500px 500px 40px',
                          '@media (min-width:280px) and (max-width: 800px)': {
                            width: '100%',
                            height: '170px',
                            borderRadius: '40px 40px 100% 100%',
                          },
                        }}
                      ></Box>
                      <Grid
                        container
                        spacing={2}
                        sx={{
                          padding: { xs: 4, sm: 6 },
                          '@media(min-width: 280px) and (max-width: 445px)': {
                            textAlign: 'center',
                          },
                        }}
                      >
                        <Grid
                          item
                          xs={12}
                          sm={7}
                          md={8}
                          lg={6.5}
                          xl={6.5}
                          sx={{
                            color: '#333',
                            textWrap: 'wrap',
                          }}
                        >
                          <Typography
                            variant="h4"
                            sx={{
                              maxWidth: { xs: '400px', sm: '650px' },
                              textOverflow: 'ellipsis',
                              overflow: 'hidden',
                              whiteSpace: 'nowrap',
                              ml: 0.4,
                              fontSize: { xs: '21px' },
                            }}
                          >
                            {item?.title}
                          </Typography>
                          <Typography variant="body1" sx={{ ml: 0.5, mt: 1 }}>
                            {formatDistanceToNow(new Date(item?.created_at), {
                              addSuffix: true,
                            })}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={5}
                          md={4}
                          lg={2.5}
                          xl={2}
                          sx={{
                            color: '#333',
                            fontSize: '15px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal',
                            ml: { xs: '4px', sm: '0px' },
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: {
                                xs: 'start',
                                sm: 'end',
                              },
                              '@media(min-width: 280px) and (max-width: 445px)':
                                {
                                  justifyContent: 'center',
                                },
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                fontSize: '14px',
                                fontWeight: 600,
                              }}
                            >
                              {ESTIMATE_RANGE || ''}
                            </Typography>
                            <Typography
                              sx={{
                                ml: 1,
                                fontWeight: 700,
                                color: '#333333',
                                fontSize: { xs: '18px', sm: '20px' },
                                maxWidth: { xs: '50px', sm: '50px' },
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                              }}
                              component={'span'}
                            >
                              {`${item?.amount}`}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={3}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: {
                                sm: 'start',
                                lg: 'end',
                              },
                              '@media(min-width: 280px) and (max-width: 445px)':
                                {
                                  justifyContent: 'center',
                                },
                              pt: 0.5,
                              pr: 2,
                              ml: { xs: '4px', lg: '0px' },
                            }}
                          >
                            <Link
                              href={`${VIEW_BUTTON?.link || '#'}${item?.property_id || '#'}`}
                            >
                              <Typography
                                sx={{
                                  color: '#FB631C',
                                  width: '86px',
                                  height: '25px',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  border: '1px solid #FB631C',
                                  backgroundColor: '#fff',
                                  borderRadius: '15px',
                                  alignItems: 'center',
                                  fontSize: '12px',
                                  fontWeight: 500,
                                  '&:hover': {
                                    backgroundColor: '#fb631c',
                                    color: '#fff',
                                  },
                                }}
                              >
                                {VIEW_BUTTON?.text || ''}
                              </Typography>
                            </Link>
                          </Box>
                        </Grid>
                        <Box
                          sx={{
                            color: '#333',
                            px: '20px',
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
                              maxWidth: 'auto',
                              letterSpacing: '0em',
                              textAlign: 'left',
                              display: '-webkit-box',
                              overflow: 'hidden',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 4,
                              mb: 1,
                            }}
                          >
                            {item?.description}
                          </Typography>
                        </Box>
                        <LiveBiddingPropertiesList
                          city={item?.city}
                          status={item?.purpose}
                          location={item?.location}
                          proposal={checkProposal(
                            item?.property_id,
                            all_proposals,
                            'Submited'
                          )}
                          connects={item?.connects}
                          cardKeys={postListingAdCard}
                          noConnects={true}
                        />
                      </Grid>
                      <Box
                        sx={{
                          position: 'absolute',
                          height: '100%',
                          background: '#F6FBFF',
                          zIndex: -1,
                          top: 0,
                          right: 0,
                          width: {
                            sm: '240px',
                            md: '280px',
                            lg: '319px',
                          },
                          borderRadius: '500px 40px 40px 500px',
                          '@media (min-width:280px) and (max-width: 800px)': {
                            top: 'auto',
                            bottom: 0,
                            width: '100%',
                            height: '170px',
                            borderRadius: '100% 100% 30px 30px',
                          },
                        }}
                      ></Box>
                    </Box>
                  </Grid>
                ))
            ) : (
              <NotFoundSection
                heading={'Sorry!'}
                message={`${searchValue} is not found`}
              />
            )}
            {filteredAds?.length > 3 && (
              <Box sx={{ textAlign: 'center', marginTop: 1 }}>
                <Button
                  onClick={
                    showAllItems ? handleShowLessClick : handleShowMoreClick
                  }
                  sx={{
                    margin: 'auto',
                    color: '#1176AD',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '24.2px',
                    '&:hover': {
                      color: '#1176AD',
                      textDecoration: 'underline',
                      textUnderlineOffset: '5px',
                    },
                  }}
                >
                  {showAllItems ? SHOW_LESS : LOAD_MORE}
                </Button>
              </Box>
            )}
          </>
        </Box>
      )}
    </>
  );
};

export default PostListingCard;
