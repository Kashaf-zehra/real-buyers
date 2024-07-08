import React, { useState, useEffect } from 'react';
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
} from '@mui/material';
import SliderFilter from './SliderFilter';
import PropertyTabs from './TabsFilter';
import { useSelector } from 'react-redux';

const FilterComponent = ({ data }) => {
  const globalUnits = useSelector((state) => state.globalUnits);
  const [searchText, setSearchText] = useState('');
  const [selectedPropertyAdType, setSelectedPropertyAdType] = useState('');
  const [selectedAreaUnit, setSelectedAreaUnit] = useState('sqft');
  const [selectedAreaRange, setSelectedAreaRange] = useState(['', '']);
  const [selectedPriceUnit, setSelectedPriceUnit] = useState('pkr');
  const [selectedPriceRange, setSelectedPriceRange] = useState(['', '']);
  const [selectedPropertyTab, setSelectedPropertyTab] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState('');

  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);

  const handleClick1 = (event) => {
    setAnchorEl1(anchorEl1 ? null : event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(anchorEl3 ? null : event.currentTarget);
  };

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const id1 = open1 ? 'simple-popper1' : undefined;
  const id2 = open2 ? 'simple-popper2' : undefined;
  const id3 = open3 ? 'simple-popper3' : undefined;

  const handleAreaChange = (event) => {
    setSelectedAreaUnit(event.target.value);
  };

  const handleAreaRangeChange = (event, newValue) => {
    setSelectedAreaRange(newValue);
  };

  const handlePriceChange = (event) => {
    setSelectedPriceUnit(event.target.value);
  };

  const handlePriceRangeChange = (event, newValue) => {
    setSelectedPriceRange(newValue);
  };

  const handlePropertyTabChange = (event, newValue) => {
    setSelectedPropertyTab(newValue);
    setSelectedProperty(null);
  };

  const handlePropertyChange = (event) => {
    const chipIndex = event.target.value;
    setSelectedProperty(globalUnits?.PROPERTY_TABS_DATA?.content[chipIndex]);
  };

  const handlePriceApply = () => {};

  const handlePriceCancel = () => {};
  const handleAreaApply = () => {};
  const handleAreaCancel = () => {};
  const handlePropertyApply = () => {};
  const handlePropertyCancel = () => {};
  const handleFilter = () => {
    const filteredData = data?.filter((projects) => {
      return (
        projects?.title === searchText &&
        projects?.description === searchText &&
        projects?.areaUnit === selectedAreaUnit &&
        projects?.purpose === selectedPropertyAdType &&
        projects?.amount <= selectedPriceRange[0] &&
        projects?.amount >= selectedPriceRange[1] &&
        projects?.amount <= selectedAreaRange[0] &&
        projects?.amount >= selectedAreaRange[1] &&
        projects?.amountCurrency === selectedPriceUnit &&
        projects?.propertyType === selectedProperty &&
        projects?.propertyCategory === selectedPropertyTab &&
        projects?.status === 'submit'
      );
    });
    console.log(filteredData);
  };
  const handleClearFilter = () => {
    setSelectedPropertyAdType('');
    setSelectedPropertyTab(0);
    setSelectedProperty('');
    setSelectedPriceUnit('');
    setSelectedPriceRange(['', '']);
    setSelectedAreaUnit('');
    setSelectedAreaRange(['', '']);
    setSearchText('');
  };

  useEffect(() => {
    handleFilter();
  }, [selectedPropertyAdType, searchText]);

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <Select
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
          <Grid item xs={2}>
            <TextField
              aria-describedby={id1}
              variant="outlined"
              value={selectedProperty?.title || 'Any'}
              onClick={handleClick1}
            />
            <Popper
              id={id1}
              open={open1}
              anchorEl={anchorEl1}
              placement="bottom-start"
            >
              <Box
                sx={{
                  zIndex: 999,
                  bgcolor: 'background.paper',
                  height: 'auto',
                  mt: '10px',
                }}
              >
                <PropertyTabs
                  data={globalUnits?.PROPERTY_TABS_DATA}
                  selectedPropertyTab={selectedPropertyTab}
                  selectedProperty={selectedProperty}
                  handlePropertyTabChange={handlePropertyTabChange}
                  handlePropertyChange={handlePropertyChange}
                  setSelectedProperty={setSelectedProperty}
                  handleApply={handlePropertyApply}
                  handleCancel={handlePropertyCancel}
                />
              </Box>
            </Popper>
          </Grid>
          <Grid item xs={2}>
            <TextField
              aria-describedby={id2}
              variant="outlined"
              value={`${selectedPriceRange[0]} -  ${selectedPriceRange[1]}  ${selectedPriceUnit.toUpperCase()}`}
              onClick={handleClick2}
            />
            <Popper
              id={id2}
              open={open2}
              anchorEl={anchorEl2}
              placement="bottom-start"
              zIndex={999}
            >
              <Box
                sx={{
                  zIndex: 999,
                  bgcolor: 'background.paper',
                  height: 'auto',
                  mt: '10px',
                  // width: '300px',
                }}
              >
                <SliderFilter
                  title={'Price Range'}
                  selectedUnit={selectedPriceUnit}
                  units={globalUnits?.CURRENCY_UNITS}
                  selectedRange={selectedPriceRange}
                  handleChange={handlePriceChange}
                  handleRangeChange={handlePriceRangeChange}
                  handleApply={handlePriceApply}
                  handleCancel={handlePriceCancel}
                />
              </Box>
            </Popper>
          </Grid>
          <Grid item xs={2}>
            <TextField
              aria-describedby={id3}
              variant="outlined"
              value={`${selectedAreaRange[0]} - ${selectedAreaRange[1]} ${selectedAreaUnit.toUpperCase()}`}
              onClick={handleClick3}
            />
            <Popper
              id={id3}
              open={open3}
              anchorEl={anchorEl3}
              placement={'bottom-start'}
              zIndex={999}
            >
              <Box
                sx={{
                  zIndex: 999,
                  bgcolor: 'background.paper',
                  height: 'auto',
                  mt: '10px',
                }}
              >
                <SliderFilter
                  title={'Area'}
                  selectedUnit={selectedAreaUnit}
                  units={globalUnits?.AREA_UNITS}
                  selectedRange={selectedAreaRange}
                  handleChange={handleAreaChange}
                  handleRangeChange={handleAreaRangeChange}
                  handleApply={handleAreaApply}
                  handleCancel={handleAreaCancel}
                />
              </Box>
            </Popper>
          </Grid>

          <Grid item xs={2.8}>
            <TextField
              fullWidth
              placeholder="Search Projects"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Grid>
          <Grid item xs={1.2}>
            <Button
              sx={{ height: '52px' }}
              variant={'outlined'}
              onClick={handleClearFilter}
              fullWidth
            >
              Clear Filter
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FilterComponent;
