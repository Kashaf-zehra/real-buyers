import { Box, Button } from '@mui/material';
import React from 'react';

const FilterApplicatonButtons = ({ apply, cancel }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Button
        onClick={cancel}
        variant="outlined"
        sx={{
          width: { xs: '40%', sm: '200px' },
          '@media(min-width: 280px) and (max-width:400px)': {
            width: '100%',
          },
          height: '45px',
          flexShrink: 0,
          fontSize: { xs: '12px', sm: '15px' },
          fontWeight: 400,
        }}
      >
        {'Cancel'}
      </Button>
      <Button
        onClick={apply}
        variant="primary"
        sx={{
          width: { xs: '40%', sm: '200px' },
          '@media(min-width: 280px) and (max-width:400px)': {
            width: '100%',
          },
          height: '45px',
          flexShrink: 0,
          fontSize: { xs: '13px', sm: '15px' },
          fontWeight: 400,
        }}
        type="submit"
      >
        {'Apply'}
      </Button>
    </Box>
  );
};

export default FilterApplicatonButtons;
