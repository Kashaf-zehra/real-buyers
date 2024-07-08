'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Grid,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';

import NotFoundSection from '@/src/components/global/NotFoundSection';
import ProposalCard from '@/src/components/dashboard/ProposalCard';

import { ALL_POSTLISTING_FILTRATION } from '@/src/constants/agent/My_Properties';
import {
  a11yProps,
  findData,
  justifyContent,
  renderAdCard,
} from '@/src/utils/dashboardUtils';

const MyProperties = () => {
  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState('All');
  const { fields, reset_button } = ALL_POSTLISTING_FILTRATION;
  const { agentPostings, active, draft, trash } = useSelector(
    (state) => state?.postListingAds
  );
  const user_id = useSelector((state) => state?.currentUser?.user?.id);
  const find_posting = findData(user_id, agentPostings);
  const find_active = findData(user_id, active);
  const find_draft = findData(user_id, draft);
  const find_trash = findData(user_id, trash);

  const tabs = [
    {
      label: 'All',
      prop: a11yProps(0),
      items: find_posting?.length || 0,
    },
    {
      label: 'Active',
      prop: a11yProps(1),
      items: find_active?.length || 0,
    },
    {
      label: 'Draft',
      prop: a11yProps(2),
      items: find_draft?.length || 0,
    },
    {
      label: 'Trash',
      prop: a11yProps(3),
      items: find_trash?.length || 0,
    },
  ];

  const [filterObject, setfilterObject] = useState({
    purpose: '',
    city: '',
    location: '',
    property_Type: '',
  });

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
  const handleChangeSelect = (key, val) => {
    setfilterObject({
      ...filterObject,
      [key]: val,
    });
  };

  const handleReset = () => {
    setfilterObject({
      ...filterObject,
      purpose: '',
      city: '',
      location: '',
      property_Type: '',
    });
  };

  return (
    <>
      <Box
        sx={{
          mx: { md: 'auto', lg: 0 },
          maxWidth: { sm: 'auto', md: '1200px', xl: '1200px', xxl: '1500px' },
        }}
      >
        <Grid
          container
          columnGap={2}
          rowGap={2}
          sx={{
            alignItems: 'flex-end',
          }}
        >
          {fields &&
            fields?.map((field, index) => (
              <Grid item xs={12} sm={5.5} md={3.8} lg={2.3} key={index}>
                <Box sx={{ width: '100%' }}>
                  <Typography>{field?.title || ''}</Typography>
                  <Autocomplete
                    sx={{
                      marginTop: '12px',
                      background: '#fff',

                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                      },
                      '&:hover fieldset': {
                        border: 'none',
                      },
                      '& .css-1v0wyq6-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-clearIndicator':
                        {
                          color: '#66666666',
                          display: 'inline-flex',
                          '&:hover': {
                            color: '#66666666',
                          },
                        },
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '5px',
                        height: '40px',
                        '& fieldset': {
                          border: '1px solid #E7E7E7',
                        },
                      },
                      '& .MuiAutocomplete-inputRoot': {
                        margin: '0 !important',
                        padding: '0 !important',
                        paddingLeft: '12px !important',
                      },
                      '& .MuiInputLabel-root': {
                        fontSize: '14px',
                        marginTop: -0.9,
                        marginLeft: -0.5,
                        '@media (min-width: 280px) and (max-width: 375px)': {
                          fontSize: '10px',
                        },
                      },
                      '& .MuiAutocomplete-root': {
                        margin: '0 !important',
                        padding: '0 !important',
                      },
                      '& .MuiAutocomplete-option': {
                        borderBottom: '1px solid #E7E7E7',
                      },
                      '&:hover': {
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        },
                      },
                    }}
                    popupIcon={
                      <KeyboardArrowDownIcon sx={{ color: '#66666666' }} />
                    }
                    disablePortal
                    id="combo-box-demo"
                    value={filterObject?.[field?.key]}
                    onChange={(e) =>
                      handleChangeSelect(field?.key, e?.target?.innerText)
                    }
                    options={field?.options?.map((opt) => opt)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Select Type"
                        InputLabelProps={{
                          sx: {
                            margin: 0,
                            padding: 0,
                            fontSize: '14px',
                            '@media (min-width: 280px) and (max-width: 375px)':
                              {
                                fontSize: '10px',
                              },
                          },
                        }}
                      />
                    )}
                    renderOption={(props, option, { index }) => (
                      <Box
                        {...props}
                        sx={{
                          my: 0,
                          py: 0,
                          borderTop: `${index !== 0 ? '1px solid #E7E7E7' : null}`,
                        }}
                      >
                        <Typography
                          sx={{
                            letterSpacing: '0em',
                            maxWidth: { xs: '200px' },
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {option?.label || ''}
                        </Typography>
                      </Box>
                    )}
                  />
                </Box>
              </Grid>
            ))}
          <Grid item xs={12} md={1}>
            <Button
              onClick={() => handleReset()}
              variant="text"
              disableRipple
              sx={{
                color: '#126FAA',
                textDecoration: 'underline',
                '&:hover, &:focus': {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                },
              }}
            >
              {reset_button || ''}
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          background: '#fff',
          borderRadius: '10px',
          border: '1px solid #E4E4E4',
          mt: 4,
          mb: 6,
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
              width: '100%',
              display: 'flex',
              mx: 'auto',
              '@media (max-width: 755px)': {
                justifyContent: justifyContent(
                  find_posting,
                  find_active,
                  find_draft,
                  find_trash,
                  currentTab,
                  filterObject,
                  1
                ),
              },
              justifyContent: {
                sm: justifyContent(
                  find_posting,
                  find_active,
                  find_draft,
                  find_trash,
                  currentTab,
                  filterObject,
                  2
                ),
              },
              alignItems: 'center',
              flexDirection: { sm: 'row', md: 'column' },
              gap: { xs: 1.5, sm: 2.5, md: 3.5 },
            }}
          >
            {renderAdCard(
              find_posting,
              find_active,
              find_draft,
              find_trash,
              currentTab,
              filterObject
            )?.length < 1 ? (
              <NotFoundSection
                heading={`No ${currentTab || ''} Data`}
                message={''}
              />
            ) : (
              renderAdCard(
                find_posting,
                find_active,
                find_draft,
                find_trash,
                currentTab,
                filterObject
              )?.map((item, index) => (
                <ProposalCard key={index} data={item} currentTab={currentTab} />
              ))
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MyProperties;
