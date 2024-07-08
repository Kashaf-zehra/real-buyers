import React, { useState, useEffect } from 'react';
import {
  Grid,
  Box,
  Typography,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';
import ProposalTabs from './ProposalTabs';
import Link from 'next/link';

import {
  CONSTANTS,
  LISTING_TYPE,
  PROPERTIES_LISTING,
  PROPOSAL_LISTING,
} from '@/src/constants/Proposals';

import {
  filterData,
  getUniqueFilteredOptions,
} from '@/src/utils/proposalFilter';

const ProposalFilter = ({ data }) => {
  const [listingType, setListingType] = useState('proposals');
  const [selectedData, setSelectedData] = useState(data);

  const [purposeOptions, setPurposeOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);
  const [propertyTypeOptions, setPropertyTypeOptions] = useState([]);

  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] = useState('');

  const handleListingTypeChange = (e) => {
    const selectedListValue = e.target.value;
    setListingType(selectedListValue);
    setSelectedData(
      selectedListValue === 'proposals' ? PROPOSAL_LISTING : PROPERTIES_LISTING
    );
  };

  const [filteredProposalsData, setFilteredProposalsData] =
    useState(selectedData);
  useEffect(() => {
    const {
      purposeOptions,
      cityOptions,
      locationOptions,
      propertyTypeOptions,
    } = getUniqueFilteredOptions(selectedData);
    setPurposeOptions(purposeOptions);
    setCityOptions(cityOptions);
    setLocationOptions(locationOptions);
    setPropertyTypeOptions(propertyTypeOptions);
  }, [listingType, selectedData]);

  const handleDropdownChange = (e, setState) => {
    const selectedValue = e.target.value;
    setState(selectedValue);

    const filteredProposalsData = filterData(
      selectedData,
      selectedPurpose,
      selectedCity,
      selectedLocation,
      selectedPropertyType
    );
    setFilteredProposalsData(filteredProposalsData);
  };

  const handleClearButtonClick = () => {
    setSelectedPurpose('');
    setSelectedCity('');
    setSelectedLocation('');
    setSelectedPropertyType('');
    setFilteredProposalsData(selectedData);
  };

  const dropdowns = [
    {
      label: 'Purpose',
      state: selectedPurpose,
      setState: setSelectedPurpose,
      options: purposeOptions,
    },
    {
      label: 'City',
      state: selectedCity,
      setState: setSelectedCity,
      options: cityOptions,
    },
    {
      label: 'Location',
      state: selectedLocation,
      setState: setSelectedLocation,
      options: locationOptions,
    },
    {
      label: 'Property Type',
      state: selectedPropertyType,
      setState: setSelectedPropertyType,
      options: propertyTypeOptions,
    },
  ];

  return (
    <>
      <Box fullWidth sx={{ display: 'flex', gap: '10px', pb: '30px' }}>
        <Box width={'95%'} xs={12}>
          <Grid container spacing={2} alignItems="center">
            {dropdowns.map((dropdown, index) => (
              <Grid item xs={3} key={index}>
                <Typography variant="subtitle1">{dropdown?.label}</Typography>
                <FormControl fullWidth>
                  <Select
                    value={dropdown?.state}
                    displayEmpty
                    onChange={(e) => {
                      handleDropdownChange(e, dropdown?.setState, index);
                    }}
                    sx={{ background: '#fff' }}
                    placeholder={`Select ${dropdown?.label}`}
                  >
                    <MenuItem value="">{`Select ${dropdown?.label}`}</MenuItem>
                    {dropdown?.options?.map((option, optionIndex) => (
                      <MenuItem key={optionIndex} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          width={'auto'}
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            verticalAlign: 'center',
          }}
        >
          <Link
            href={CONSTANTS?.resetButton?.link}
            onClick={handleClearButtonClick}
          >
            <Typography
              sx={{
                textDecoration: 'underline',
                color: '#126FAA',
                marginBottom: '15px',
              }}
            >
              {CONSTANTS?.resetButton?.text}
            </Typography>
          </Link>
        </Box>
      </Box>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={9}></Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <Select
              value={listingType}
              onChange={handleListingTypeChange}
              sx={{ background: '#fff' }}
            >
              {LISTING_TYPE.map((item) => (
                <MenuItem key={item?.value} value={item?.value}>
                  {item?.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <ProposalTabs filteredProposalsData={filteredProposalsData} />
    </>
  );
};

export default ProposalFilter;
