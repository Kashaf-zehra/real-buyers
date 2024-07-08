import React from 'react';
import { Typography, Box } from '@mui/material';

const InstructionsForUpload = ({ propertyInformation }) => {
  return (
    <>
      {propertyInformation?.map((item, index) => (
        <Box sx={{ padding: '11px' }} key={index}>
          <ul>
            <li>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  pr: { xs: 0, lg: 10 },
                  flexDirection: { xs: 'row', md: 'row' },
                  alignItems: 'start',
                  fontSize: '20px',
                  fontWeight: 400,
                  gap: '15px',
                  listStyle: 'none',
                }}
              >
                <Box
                  component={'img'}
                  src={item?.image}
                  sx={{
                    width: { xs: 15, sm: 17 },
                    height: { xs: 12, sm: 13 },
                    mt: 1,
                  }}
                  alt={'tick'}
                />
                <Typography
                  sx={{
                    fontSize: { xs: '14px ', sm: '16px' },
                    fontWeight: 400,
                    color: '#969696',
                  }}
                >
                  {item?.text}{' '}
                </Typography>
              </Box>
            </li>
          </ul>
        </Box>
      ))}
    </>
  );
};
export default InstructionsForUpload;
