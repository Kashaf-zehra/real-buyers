'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Box, Divider, Tab, Tabs } from '@mui/material';

import ProposalCard from '@/src/components/dashboard/ProposalCard';
import NotFoundSection from '@/src/components/global/NotFoundSection';

import PostListingCard from '../../live-bidding/PostListingCard';
import {
  a11yProps,
  findData,
  findProposal,
  findSome,
  JustifyForFindProposal,
  renderAdCardForProposal,
} from '@/src/utils/dashboardUtils';

const MyProposals = () => {
  const proposals = useSelector((state) => state?.proposals);
  const user_id = useSelector((state) => state?.currentUser?.user?.id);
  const userAds = useSelector((state) => state?.postRequestAds?.userPostings);
  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState('Save Request');

  const { save, proposalsTrash } = useSelector(
    (state) => state?.postListingAds
  );

  const find_save = findSome(save, userAds);
  const trashed_ad = findSome(save, proposalsTrash);
  const find_trash = findData(user_id, trashed_ad);
  const find_proposals_active = findProposal(user_id, proposals, 'Connected');
  const find_proposals_archive = findProposal(user_id, proposals, 'Archived');
  const find_proposals_rejected = findProposal(user_id, proposals, 'Rejected');

  const tabs = [
    {
      label: 'Save Request',
      prop: a11yProps(0),
      items: find_save?.length || 0,
    },
    {
      label: 'Active',
      prop: a11yProps(1),
      items: find_proposals_active?.length || 0,
    },
    {
      label: 'Archive',
      prop: a11yProps(2),
      items: find_proposals_archive?.length || 0,
    },
    {
      label: 'Rejected',
      prop: a11yProps(3),
      items: find_proposals_rejected?.length || 0,
    },
    {
      label: 'Trash',
      prop: a11yProps(3),
      items: find_trash?.length || 0,
    },
  ];

  const handleChangeTab = (event, newValue) => {
    let tab = event?.target?.innerText.split(' ');
    if (tab.length > 1) {
      tab = tab.slice(0, -1).join(' ');
    } else {
      tab = tab.join(' ');
    }
    setCurrentTab(tab);
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          background: '#fff',
          borderRadius: '10px',
          border: '1px solid #E4E4E4',
          mb: 4,
          mx: { xs: 'auto', lg: 0 },
          width: 'auto',
          maxWidth: { md: '1200px', xl: '1200px', xxl: '1500px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            mx: { xs: 1, md: 0 },
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '20px',
          }}
        >
          <Tabs
            variant="scrollable"
            value={value}
            onChange={handleChangeTab}
            aria-label="basic tabs example"
          >
            {tabs?.map(({ label, prop, items }, i) => (
              <Tab
                key={i}
                label={`${label} (${items})`}
                {...prop}
                disableRipple={true}
                sx={{
                  textTransform: 'math-auto',
                }}
              />
            ))}
          </Tabs>
        </Box>
        <Divider />
        <Box
          className="scrollbar-container"
          sx={{
            mr: { xs: 0.8, sm: 2, md: 'auto' },
            ml: { xs: 0.8, sm: 2, md: 'auto' },
            pt: { xs: 2.5, sm: 3, md: 5 },
            pb: { xs: 2, sm: 2, md: 3 },
            px: { xs: 0, sm: 0, md: 3 },
            maxHeight: '950px',
            width: 'auto',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              mx: 'auto',
              '@media (max-width: 755px)': {
                justifyContent: JustifyForFindProposal(
                  find_save,
                  find_proposals_active,
                  find_proposals_archive,
                  find_proposals_rejected,
                  trashed_ad,
                  currentTab,
                  1
                ),
              },
              justifyContent: {
                sm: JustifyForFindProposal(
                  find_save,
                  find_proposals_active,
                  find_proposals_archive,
                  find_proposals_rejected,
                  trashed_ad,
                  currentTab,
                  2
                ),
              },
              alignItems: 'center',
              flexDirection: { sm: 'row', md: 'column' },
              gap: { xs: 1.5, sm: 2.5, md: 3.5 },
            }}
          >
            {renderAdCardForProposal(
              find_save,
              find_proposals_active,
              find_proposals_archive,
              find_proposals_rejected,
              trashed_ad,
              currentTab
            )?.length < 1 ? (
              <NotFoundSection
                heading={'Sorry!'}
                message={`No ${currentTab || ''} Data`}
                link={'/agent/live-bidding'}
              />
            ) : (
              <>
                {currentTab === 'Save Request' ? (
                  <PostListingCard ads={find_save} height={'1098px'} />
                ) : (
                  <>
                    {renderAdCardForProposal(
                      find_save,
                      find_proposals_active,
                      find_proposals_archive,
                      find_proposals_rejected,
                      trashed_ad,
                      currentTab
                    )?.map((item, index) => (
                      <ProposalCard
                        key={index}
                        data={item}
                        currentTab={currentTab}
                        link={
                          currentTab === 'Active'
                            ? `my-proposals/proposal/${item?.proposal_id || '#'}`
                            : '#'
                        }
                      />
                    ))}
                  </>
                )}
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MyProposals;
