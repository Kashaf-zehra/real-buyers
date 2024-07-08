'use client';
import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Paper,
  TableContainer,
  TableHead,
} from '@mui/material';

import { PROPERTY_ESTATE } from '@/src/constants/Properties';

const PropertyOverview = ({ propertyData, overview }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '100%', md: '100%' },
          gap: '9px',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '15px', md: '30px' },
            fontWeight: 600,
            marginLeft: '10px',
          }}
        >
          {overview}
        </Typography>
        <Box
          sx={{
            border: '2px solid #F8F8F8',
            borderTop: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            height: '170px',
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              justifyContent: { xs: 'center', md: 'none' },
              maxHeight: '300px',
              borderSpacing: '10px',
              borderRadius: '50px',
              px: '60px',
              backgroundColor: '#000',
              marginBottom: '10px',
              overflowX: { xs: 'auto', md: 'hidden' },
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              '@media (min-width: 900px) and (max-width: 1400px)': {
                overflowX: 'auto',
              },
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{}}>
                  {PROPERTY_ESTATE?.propertyAttributes?.map(
                    (propertytype, index) => (
                      <TableCell
                        key={index}
                        sx={{
                          borderCollapse: 'collapse',
                          color: 'white',
                          backgroundColor: 'black',
                          // overflow: 'scroll',
                          border: 'none',
                          width: `${100 / 7}%`,
                          textAlign: 'center',
                          fontSize: '15px',
                          padding: '15px',
                          px: '26px',
                        }}
                      >
                        {propertytype?.label}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
          <TableContainer
            component={Paper}
            sx={{
              justifyContent: { xs: 'center', md: 'none' },
              overflow: 'auto',
              // maxHeight: '300px',
              borderSpacing: '10px',
              width: '95%',
              mx: 'auto',
              // marginLeft: { xs: '10px', md: '28px' },
              marginBottom: '20px',
            }}
          >
            <Table
              sx={{
                borderRadius: '20px',
              }}
            >
              <TableBody>
                <TableRow sx={{ margin: '20px' }}>
                  {[
                    'propertyType',
                    'location',
                    'amount',
                    'purpose',
                    'bedrooms',
                    'bathrooms',
                    'parking',
                  ].map((key, index) => (
                    <TableCell
                      key={index}
                      sx={{
                        background: '#F8F8F8',
                        border: '1px solid #B8B8B8',
                        padding: '10px',
                        width: `${100 / 7}%`,
                        textAlign: 'center',
                      }}
                    >
                      {propertyData?.[key]}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};
export default PropertyOverview;
