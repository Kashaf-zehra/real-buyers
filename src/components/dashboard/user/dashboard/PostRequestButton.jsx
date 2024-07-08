import React from 'react';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { DASHBOARD } from '@/src/constants/user/Dashboard';

const PostRequestButton = () => {
  return (
    <Box
      sx={{
        mx: { xs: 'auto', lg: 0 },
        maxWidth: '1200px',
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: { xs: '27px', sm: '30px' },
              lineHeight: '36.31px',
              ml: 1,
              '@media (max-width: 445px)': {
                textAlign: 'center',
              },
            }}
          >
            {DASHBOARD}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PostRequestButton;
