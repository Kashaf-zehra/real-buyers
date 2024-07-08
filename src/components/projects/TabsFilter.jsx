'use client';
import React from 'react';
import { Button, Tab, Tabs, Typography, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import FilterApplicatonButtons from './FilterApplicatonButtons';

function PropertyTabs({
  data,
  handlePropertyTabChange,
  handlePropertyChange,
  selectedPropertyTab,
  selectedProperty,
  setSelectedProperty,
  handleCancel,
  handleApply,
}) {
  return (
    <Box
      zIndex={999}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: '20px',
        borderRadius: '20px',
        boxShadow: '0px 0px 10px 0px #00000040',
      }}
    >
      <Tabs value={selectedPropertyTab} onChange={handlePropertyTabChange}>
        {data?.map((tab, index) => (
          <Tab key={index} label={tab?.label} />
        ))}
      </Tabs>
      {data?.map((tab, tabIndex) => (
        <TabPanel key={tabIndex} value={selectedPropertyTab} index={tabIndex}>
          <Box width={'600px'} py={'20px'}>
            {tab?.content?.map((chip, chipIndex) => (
              <Button
                key={chipIndex}
                variant={'outlined'}
                px={'10px'}
                my={'20px'}
                style={{
                  margin: '4px',
                  borderRadius: '20px',
                  height: '55px',
                  borderColor: `${selectedProperty === chip ? '#1877f2' : '#E7E7E7'}`,
                  backgroundColor: `${selectedProperty === chip ? '##F4F5F7' : '#fff'}`,
                }}
                onClick={() => setSelectedProperty(chip)}
              >
                <Image
                  src={
                    selectedProperty === chip ? chip?.activeImage : chip?.image
                  }
                  width={30}
                  height={30}
                  alt={tab?.label}
                />
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    color: '#fb631c',
                    pl: '10px',
                  }}
                >
                  {chip?.title}
                </Typography>
              </Button>
            ))}
            <Select
              value={
                selectedProperty
                  ? tab?.content?.findIndex((chip) => chip === selectedProperty)
                  : ''
              }
              onChange={handlePropertyChange}
              displayEmpty
              fullWidth
              variant="outlined"
              style={{ display: 'none' }} // Hide the select, it's just for accessibility purposes
            >
              {tab?.content?.map((chip, chipIndex) => (
                <MenuItem key={chipIndex} value={chipIndex}>
                  {chip?.title}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </TabPanel>
      ))}

      <FilterApplicatonButtons apply={handleApply} cancel={handleCancel} />
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default PropertyTabs;
