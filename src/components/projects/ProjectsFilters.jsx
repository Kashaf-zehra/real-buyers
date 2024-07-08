'use client';
import React, { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
  Button,
  Grid,
  Container,
} from '@mui/material';

const ProjectsFilters = ({ data }) => {
  const [filterValues, setFilterValues] = useState({
    postType: '',
    propertyType: '',
    propertyPrice: '',
    propertySize: '',
    searchInput: '',
  });

  useEffect(() => {
    handleFilter();
  }, [filterValues]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleClearFilter = () => {
    setFilterValues({
      postType: '',
      propertyType: '',
      propertyPrice: '',
      propertySize: '',
      searchInput: '',
    });
  };

  const handleFilter = () => {
    const filteredData = data?.filter((item) => {
      return (
        (filterValues?.postType === '' ||
          item?.postType === filterValues?.postType) &&
        (filterValues?.propertyType === '' ||
          item?.propertyType === filterValues?.propertyType) &&
        (filterValues?.propertyPrice === '' ||
          item?.propertyPrice === filterValues?.propertyPrice) &&
        (filterValues?.propertySize === '' ||
          item?.propertySize === filterValues?.propertySize) &&
        (filterValues?.searchInput === '' ||
          item?.title?.includes(filterValues?.searchInput)) &&
        item?.status === 'submit'
      );
    });
    console.log(filteredData);
  };

  return (
    <>
      <Container>
        <Grid container alignItems="center">
          <FormControl>
            <InputLabel>postType</InputLabel>
            <Select
              value={filterValues?.postType}
              onChange={handleChange}
              name="postType"
              autoWidth
            >
              <MenuItem key="" value="">
                All
              </MenuItem>
              {data?.map((item) => (
                <MenuItem key={item?.postType} value={item?.postType}>
                  {item?.postType}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>propertyType</InputLabel>
            <Select
              value={filterValues?.propertyType}
              onChange={handleChange}
              name="propertyType"
              autoWidth
            >
              <MenuItem key="" value="">
                All
              </MenuItem>
              {data?.map((item) => (
                <MenuItem key={item?.propertyType} value={item?.propertyType}>
                  {item?.propertyType}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel>propertyPrice</InputLabel>
            <Select
              value={filterValues?.propertyPrice}
              onChange={handleChange}
              name="propertyPrice"
              autoWidth
            >
              <MenuItem key="" value="">
                Any Prize
              </MenuItem>
              {data?.map((item) => (
                <MenuItem key={item?.propertyPrice} value={item?.propertyPrice}>
                  {item?.propertyPrice}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel>propertySize</InputLabel>
            <Select
              value={filterValues?.propertySize}
              onChange={handleChange}
              name="propertySize"
              autoWidth
            >
              <MenuItem key="" value="">
                Any Size
              </MenuItem>
              {data?.map((item) => (
                <MenuItem key={item?.propertySize} value={item?.propertySize}>
                  {item?.propertySize}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Input
            placeholder="Search..."
            value={filterValues?.searchInput}
            onChange={(e) =>
              setFilterValues({
                ...filterValues,
                searchInput: e.target.value,
              })
            }
            name="searchInput"
          />

          <Button
            variant="contained"
            color="secondary"
            onClick={handleClearFilter}
            sx={{
              height: '52px',
            }}
          >
            Clear Filter
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default ProjectsFilters;
