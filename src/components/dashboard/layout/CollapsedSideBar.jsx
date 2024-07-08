import React from 'react';
import { Grid, Tooltip } from '@mui/material';
import { Box } from '@mui/system';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import CollapsedLiveBiddingList from './CollapsedLiveBiddingList';

const CollapsedSideBar = ({ menuItem, isCollapsed, isCollaps }) => {
  return (
    <Box
      style={{
        width: isCollapsed,
        height: '100%',
        borderRight: '2px solid #E4E4E4',
        backgroundColor: '#fff',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Tooltip describeChild title="Show Panel">
          <Box
            sx={{
              position: 'absolute',
              top: 17,
              right: -15,
              width: '30px',
              height: '30px',
              backgroundColor: '#FFF',
              borderRight: '2px solid #E4E4E4',
              borderRadius: '100%',
            }}
          >
            <ArrowForwardIosIcon
              fontSize="small"
              onClick={isCollaps}
              sx={{ cursor: 'pointer', m: 0.6, color: '#000' }}
            />
          </Box>
        </Tooltip>
      </Box>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 0, md: 0, lg: 0 }}
        sx={{
          backgroundColor: '#fff',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            pt: '20px',
            mx: 'auto',
            borderRadius: 15,
          }}
        >
          <CollapsedLiveBiddingList list={menuItem} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default CollapsedSideBar;
