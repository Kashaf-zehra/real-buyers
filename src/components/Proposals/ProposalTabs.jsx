import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useSearchParams } from 'next/navigation';

import ProposalListingCard from './ProposalListingCard';
import {
  countFilteredData,
  filterDataBySearch,
  filterPropertiesByStatus,
} from '@/src/utils/SearchFilter';
import { getUniqueProposalStatus } from '@/src/utils/proposalFilter';
import ProposalCard from '@/src/components/dashboard/ProposalCard';

const ProposalTabs = ({ filteredProposalsData }) => {
  const [value, setValue] = useState(0);
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    setValue(0);
  }, []);

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const uniqueProposalStatuses = getUniqueProposalStatus(filteredProposalsData);

  const tabData = [
    { label: 'All', tabProposalStatus: 'All' },
    ...uniqueProposalStatuses.map((proposalStatus) => ({
      label: proposalStatus,
      tabProposalStatus: proposalStatus,
    })),
  ];

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        background: '#fff',
        borderRadius: '10px',
        border: '1px solid #E4E4E4',
        mt: '20px',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {tabData?.map((tab, index) => {
              const filteredProperties = filterPropertiesByStatus(
                filteredProposalsData,
                tab.tabProposalStatus
              );

              const filteredCount = countFilteredData(
                filteredProperties,
                tab.tabProposalStatus,
                search
              );

              return (
                <Tab
                  key={tab.label}
                  label={`${tab.label} (${filteredCount})`}
                  sx={{ fontSize: '20px', fontWeight: '700' }}
                  {...a11yProps(index)}
                />
              );
            })}
          </Tabs>
        </Box>
        {tabData?.map((tab, index) => (
          <CustomTabPanel
            data={filteredProposalsData}
            key={tab.label}
            value={value}
            index={index}
            tabProposalStatus={tab.tabProposalStatus}
            search={search}
          />
        ))}
      </Box>
    </Box>
  );
};

const CustomTabPanel = ({ data, value, index, tabProposalStatus, search }) => {
  const filteredProperties = filterPropertiesByStatus(data, tabProposalStatus);
  const filteredData = filterDataBySearch(
    filteredProperties,
    tabProposalStatus,
    search
  );
  const displayData = filteredData || filteredProperties;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box
          sx={{
            px: '20px',
            py: '20px',
            overflowY: 'auto',
            height: '100vh',
          }}
        >
          {displayData.length > 0 ? (
            <ProposalListingCard proposalsData={displayData} />
          ) : (
            <Box
              className="scrollbar-container"
              sx={{
                p: { xs: 2, sm: 3 },
                height: '800px',
              }}
            >
              {[...Array(5)].map((_, index) => (
                <ProposalCard key={index} index={index} userView={false} />
              ))}
            </Box>
          )}
        </Box>
      )}
    </div>
  );
};

export default ProposalTabs;
