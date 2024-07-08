'use client';
import React, { useState } from 'react';
import { Button, Tab, Tabs, Typography, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import ProjectsFilterApplicatonButtons from './ProjectsFilterApplicatonButtons';

function ProjectsTabsFilter({
  data,
  handlePropertyTabChange,
  handlePropertyChange,
  selectedPropertyTab,
  selectedProperty,
  setSelectedProperty,
  setSelectedPropertyTab,
}) {
  const [selectPropertyTab, setSelectPropertyTab] = useState(0);
  const [selectProperty, setSelectProperty] = useState('');
  console.log(selectedPropertyTab, selectedProperty);
  const handleTabChange = (event, newValue) => {
    setSelectPropertyTab(newValue);
    setSelectProperty(data?.[newValue]?.content[0]); // Set default selectProperty on tab change
  };

  const handleChange = (event) => {
    const chipIndex = event.target.value;
    setSelectProperty(data?.[selectPropertyTab]?.content[chipIndex]);
    console.log(
      'Property changed to:',
      data?.[selectPropertyTab]?.content[chipIndex]
    );
  };

  const handleSelectApply = () => {
    handlePropertyTabChange(selectPropertyTab);
    handlePropertyChange(selectProperty);
    setSelectedProperty(selectProperty);
    setSelectedPropertyTab(selectPropertyTab);
    selectedPropertyTab = selectPropertyTab;
    selectedProperty = selectProperty;
  };

  const handleSelectCancel = () => {
    setSelectPropertyTab(0);
    setSelectProperty('');
    setSelectedProperty(0);
    setSelectedPropertyTab('');
    selectedPropertyTab = 0;
    selectedProperty = selectProperty;
  };

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
      <Tabs value={selectPropertyTab} onChange={handleTabChange}>
        {data?.map((tab, index) => (
          <Tab key={index} label={tab?.label} />
        ))}
      </Tabs>
      {data?.map((tab, tabIndex) => (
        <TabPanel key={tabIndex} value={selectPropertyTab} index={tabIndex}>
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
                  borderColor: `${selectProperty === chip ? '#1877f2' : '#E7E7E7'}`,
                  backgroundColor: `${selectProperty === chip ? '##F4F5F7' : '#fff'}`,
                }}
                onClick={() => setSelectProperty(chip)}
              >
                <Image
                  src={
                    selectProperty === chip ? chip?.activeImage : chip?.image
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
                selectProperty
                  ? tab?.content?.findIndex((chip) => chip === selectProperty)
                  : ''
              }
              onChange={handleChange}
              displayEmpty
              fullWidth
              variant="outlined"
              style={{ display: 'none' }}
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

      <ProjectsFilterApplicatonButtons
        apply={handleSelectApply}
        cancel={handleSelectCancel}
      />
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

export default ProjectsTabsFilter;
