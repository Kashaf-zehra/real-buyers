import React from 'react';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

const ProfileCompletness = ({ title, description, percentage }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#FB631C' : '#308fe8',
    },
  }));

  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#EDF7FF',
        }}
      >
        <Box
          sx={{
            width: 'auto',
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '2px solid #E5E5E5',
            px: 4,
            py: 1.5,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '14px', lg: '16px' },
              fontWeight: 500,
              color: '#000000',
            }}
          >
            {title || ''}
          </Typography>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <BorderLinearProgress
              variant="determinate"
              value={90}
              sx={{ width: '100%', flex: 1 }}
            />
            <Typography
              sx={{
                fontSize: { xs: '14px', lg: '16px' },
                fontWeight: 500,
                ml: 1,
              }}
            >
              {percentage || ''}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', pl: 4, pr: 7, pt: 1.5, pb: 5 }}>
          <Typography
            variant="body2"
            sx={{
              color: '#000',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            {description || ''}
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default ProfileCompletness;
