'use client';
import React from 'react';
import { Typography, Box } from '@mui/material';
import { AntSwitch } from '@/src/utils/propertyInstallment';

const Notification = ({ notificationData, handleInputChange }) => {
  return (
    <>
      {notificationData?.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{
              padding: '0px 10px 10px 10px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                borderBottom: '2px solid #f4f5f7',
                gap: '10px',
                pb: 2,
              }}
            >
              <Box
                sx={{
                  width: '100% !important',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  sx={{
                    color: 'black',
                    fontSize: { sm: '16px', md: '18px', lg: '20px' },
                    fontWeight: 400,
                  }}
                >
                  {item?.title}
                </Typography>
                <AntSwitch
                  sx={{
                    marginRight: { lg: '-12px' },
                  }}
                  value={item?.value}
                  onChange={(event) =>
                    handleInputChange(item?.label, event.target.checked)
                  }
                  inputProps={{ 'aria-label': 'ant design' }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: '#666666',
                    fontSize: { sm: '12px', md: '14px', lg: '18px' },
                    fontWeight: 400,
                  }}
                >
                  {item?.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};
export default Notification;
