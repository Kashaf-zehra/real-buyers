import { Box, Typography } from '@mui/material';
import React from 'react';

const PreviewAmenities = ({ list }) => {
  return (
    <>
      <Box
        sx={{
          px: 5,
          pt: 3,
          pb: 5,
          borderBottom: '1px solid #E4E4E4',
          '@media(min-width:280px) and (max-width:400px)': { px: 3 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            pb: '20px',
            color: '#000',
            fontSize: '20px',
            fontWeight: '500',
          }}
        >
          Other Amenities
        </Typography>

        <Typography component={'ul'} sx={{ listStyleType: 'inherit', ml: 2 }}>
          {list &&
            list?.map((item, index) => (
              <>
                <Typography
                  key={index}
                  component={'li'}
                  variant={'li'}
                  sx={{ fontSize: '14px', fontWeight: 500 }}
                >
                  {item}
                </Typography>
              </>
            ))}
        </Typography>
      </Box>
    </>
  );
};

export default PreviewAmenities;
