'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import FilterAltOffRoundedIcon from '@mui/icons-material/FilterAltOffRounded';
import ProjectsSliderFilter from './ProjectsSliderFilter';
import ProjectsTabsFilter from './ProjectsTabsFilter';
import {
  Button,
  MenuItem,
  Select,
  FormControl,
  Container,
  TextField,
  Grid,
  Box,
  Popper,
  Typography,
  useMediaQuery,
} from '@mui/material';

const ProjectsFilterComponent = ({ data }) => {
  const globalUnits = useSelector((state) => state.globalUnits);
  const [searchText, setSearchText] = useState('');
  const [selectedPropertyAdType, setSelectedPropertyAdType] = useState('');
  const [selectedAreaUnit, setSelectedAreaUnit] = useState(
    globalUnits?.AREA_UNITS[0].value
  );
  const [selectedAreaRange, setSelectedAreaRange] = useState(['0', '5000']);
  const [selectedPriceUnit, setSelectedPriceUnit] = useState(
    globalUnits?.CURRENCY_UNITS[0].value
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState(['0', '5000']);
  const [selectedPropertyTab, setSelectedPropertyTab] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState('');

  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const notificationPopupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      notificationPopupRef?.current &&
      !notificationPopupRef?.current?.contains(event.target)
    ) {
      setAnchorEl1(null);
      setAnchorEl2(null);
      setAnchorEl3(null);
    }
  };

  const handleClick1 = (event) => {
    setAnchorEl1(anchorEl1 ? null : event.currentTarget);
    // Close other poppers if open
    setAnchorEl2(null);
    setAnchorEl3(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
    // Close other poppers if open
    setAnchorEl1(null);
    setAnchorEl3(null);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(anchorEl3 ? null : event.currentTarget);
    // Close other poppers if open
    setAnchorEl1(null);
    setAnchorEl2(null);
  };

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const id1 = open1 ? 'simple-popper1' : undefined;
  const id2 = open2 ? 'simple-popper2' : undefined;
  const id3 = open3 ? 'simple-popper3' : undefined;

  const handleAreaChange = (event, newValue) => {
    setSelectedAreaUnit(newValue);
  };
  const handlePriceChange = (event, newValue) => {
    setSelectedPriceUnit(newValue);
  };
  const handleAreaRangeChange = (event, newValue) => {
    setSelectedAreaRange(newValue);
  };
  const handlePriceRangeChange = (event, newValue) => {
    setSelectedPriceRange(newValue);
  };
  const handlePropertyTabChange = (event, newValue) => {
    setSelectedPropertyTab(newValue);
  };
  const handlePropertyChange = (event, newValue) => {
    setSelectedProperty(newValue);
  };

  const handleFilter = () => {
    const filteredData = data?.filter((projects) => {
      return (
        projects?.title === searchText &&
        projects?.description === searchText &&
        projects?.purpose === selectedPropertyAdType &&
        projects?.propertyType === selectedProperty?.title &&
        projects?.propertyCategory === selectedPropertyTab &&
        projects?.areaUnit === selectedAreaUnit &&
        projects?.amountCurrency === selectedPriceUnit &&
        projects?.amount <= selectedPriceRange[0] &&
        projects?.amount >= selectedPriceRange[1] &&
        projects?.amount <= selectedAreaRange[0] &&
        projects?.amount >= selectedAreaRange[1] &&
        projects?.status === 'submit'
      );
    });
    console.log(filteredData, 'filtered');
  };

  const handleClearFilter = () => {
    setSelectedPropertyAdType('');
    setSelectedPropertyTab(0);
    setSelectedProperty('');
    setSelectedPriceUnit('');
    setSelectedPriceRange(['0', '5000']);
    setSelectedAreaUnit('');
    setSelectedAreaRange(['0', '5000']);
    setSearchText('');
  };

  useEffect(() => {
    document.addEventListener('mouseleave', handleClickOutside);
    handleFilter();
    return () => {
      document.removeEventListener('mouseleave', handleClickOutside);
    };
  }, [
    searchText,
    selectedAreaRange,
    selectedAreaUnit,
    selectedPriceRange,
    selectedPriceUnit,
    selectedProperty,
    selectedPropertyAdType,
    selectedPropertyTab,
  ]);
  const isSmallScreen = useMediaQuery('(max-width:742px)');
  return (
    <>
      <Container>
        <Grid container spacing={{ xs: '10px', md: '10px', lg: '50px' }}>
          <Grid item lg={1.8} md={3} sm={6} xs={12}>
            <FormControl fullWidth>
              <Select
                fullWidth
                value={
                  selectedPropertyAdType ||
                  globalUnits?.PROPERTY_TYPES[0]?.value
                }
                onChange={(e) => setSelectedPropertyAdType(e.target.value)}
              >
                {globalUnits?.PROPERTY_TYPES?.map((unit, index) => (
                  <MenuItem key={index} value={unit?.value}>
                    {unit?.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={1.8} md={3} sm={6} xs={12}>
            <TextField
              aria-describedby={id1}
              variant="outlined"
              value={selectedProperty?.title || 'Any'}
              onClick={handleClick1}
              fullWidth
            />
            <Popper
              id={id1}
              open={open1}
              anchorEl={anchorEl1}
              placement="bottom-start"
              ref={notificationPopupRef}
              sx={{ zIndex: '1' }}
            >
              <Box
                sx={{
                  zIndex: 999,
                  bgcolor: 'background.paper',
                  height: 'auto',
                  mt: '10px',
                  borderRadius: '20px',
                }}
              >
                <ProjectsTabsFilter
                  data={globalUnits?.PROPERTY_TABS_DATA}
                  selectedPropertyTab={selectedPropertyTab}
                  selectedProperty={selectedProperty}
                  handlePropertyTabChange={handlePropertyTabChange}
                  handlePropertyChange={handlePropertyChange}
                  setSelectedProperty={setSelectedProperty}
                  setSelectedPropertyTab={setSelectedPropertyTab}
                />
              </Box>
            </Popper>
          </Grid>
          <Grid item lg={1.8} md={3} sm={6} xs={12}>
            <TextField
              aria-describedby={id2}
              variant="outlined"
              value={`${selectedPriceRange[0]} -  ${selectedPriceRange[1]}  ${selectedPriceUnit}`}
              onClick={handleClick2}
              fullWidth
            />
            <Popper
              id={id2}
              open={open2}
              anchorEl={anchorEl2}
              placement="bottom-start"
              ref={notificationPopupRef}
              sx={{ zIndex: '1' }}
            >
              <Box
                sx={{
                  zIndex: 999,
                  bgcolor: 'background.paper',
                  height: 'auto',
                  mt: '10px',
                  borderRadius: '20px',
                }}
              >
                <ProjectsSliderFilter
                  title={'Price Range'}
                  selectedUnit={selectedPriceUnit}
                  selectedRange={selectedPriceRange}
                  units={globalUnits?.CURRENCY_UNITS}
                  handleRange={handlePriceRangeChange}
                  handleUnit={handlePriceChange}
                />
              </Box>
            </Popper>
          </Grid>
          <Grid item lg={1.8} md={3} sm={6} xs={12}>
            <TextField
              aria-describedby={id3}
              variant="outlined"
              value={`${selectedAreaRange[0]} - ${selectedAreaRange[1]} ${selectedAreaUnit}`}
              onClick={handleClick3}
              fullWidth
            />
            <Popper
              id={id3}
              open={open3}
              anchorEl={anchorEl3}
              placement={'bottom-start'}
              ref={notificationPopupRef}
              sx={{ zIndex: '1' }}
            >
              <Box
                sx={{
                  zIndex: 999,
                  bgcolor: 'background.paper',
                  height: 'auto',
                  mt: '10px',
                  borderRadius: '20px',
                }}
              >
                <ProjectsSliderFilter
                  title={'Area'}
                  selectedUnit={selectedAreaUnit}
                  selectedRange={selectedAreaRange}
                  units={globalUnits?.AREA_UNITS}
                  handleRange={handleAreaRangeChange}
                  handleUnit={handleAreaChange}
                />
              </Box>
            </Popper>
          </Grid>

          <Grid item lg={3.5} md={9} sm={10} xs={10}>
            <TextField
              fullWidth
              placeholder="Search Projects"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Grid>
          <Grid item lg={1.3} md={3} sm={2} xs={2}>
            <Button
              sx={{
                height: '52px',
                color: '#126FAA',
                textDecoration: 'underline',
                p: 0,
              }}
              onClick={handleClearFilter}
              fullWidth
            >
              <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>
                {isSmallScreen ? (
                  <FilterAltOffRoundedIcon
                    sx={{ height: '40px', width: '40px' }}
                  />
                ) : (
                  `Clear Filter`
                )}
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProjectsFilterComponent;
