'use client';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Button, Fade, Popover, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { handleSearch } from '@/src/redux/slices/search/searchSlice';

const SearchPopover = ({ searchMenu, handleCloseSearchMenu }) => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const open = Boolean(searchMenu);
  const id = open ? 'simple-popover' : undefined;

  const searchInput = (e) => {
    setSearch(e?.target?.value?.toLowerCase());
    if (e?.target?.value == '') {
      dispatch(handleSearch(null));
    }
  };

  const handleSearching = () => {
    dispatch(handleSearch(search));
  };

  useEffect(() => {
    if (open) {
      dispatch(handleSearch(''));
    }
  }, [open]);

  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={searchMenu}
        onClose={handleCloseSearchMenu}
        transition
        TransitionComponent={Fade}
        sx={{ mt: 2.3 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        TransitionProps={{ timeout: 600 }}
      >
        <Fade in={open} timeout={600}>
          <Box
            sx={{
              padding: 2,
              display: 'flex',
            }}
          >
            <TextField
              id="outlined-search"
              label="Search"
              type="search"
              size="small"
              value={search}
              onChange={(e) => searchInput(e)}
            />

            <Button
              variant="primary"
              sx={{ mx: 1 }}
              onClick={() => handleSearching()}
            >
              {'search'}
            </Button>
          </Box>
        </Fade>
      </Popover>
    </>
  );
};

export default SearchPopover;
