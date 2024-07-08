import React from 'react';
import { Box } from '@mui/system';
import { Grid, Tooltip } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import ExpendedLiveBiddingList from './ExpendedLiveBiddingList';

const ExpendedSiderBar = ({ menuItem, isCollapsed, isExpended }) => {
  return (
    <Box
      sx={{
        width: isCollapsed,
        height: '100%',
        borderRight: '2px solid #E4E4E4',
      }}
    >
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 0, md: 0, lg: 0 }}
        sx={{
          backgroundColor: '#fff',
          width: '100vw',
          height: '100%',
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            padding: '15px',
            pl: '15px !important',
            pt: '30px !important',
            mx: 'auto',
            borderRadius: 15,
            height: '100%',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <Tooltip describeChild title="Hide Panel">
              <Box
                sx={{
                  position: 'absolute',
                  right: -30,
                  top: 6,
                  width: '36px',
                  height: '35px',
                  backgroundColor: '#FFF',
                  borderRight: '2px solid #E4E4E4',
                  borderRadius: '100%',
                }}
              >
                <ArrowBackIosNewIcon
                  onClick={isExpended}
                  fontSize="small"
                  sx={{ cursor: 'pointer', mt: 1, ml: 1, color: '#000' }}
                />
              </Box>
            </Tooltip>
          </Box>
          <ExpendedLiveBiddingList list={menuItem} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default ExpendedSiderBar;
