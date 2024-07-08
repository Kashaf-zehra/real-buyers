'use client';
import React from 'react';
import { Box, Typography, Select, MenuItem } from '@mui/material';
import { useSelector } from 'react-redux';

const AreaUnit = ({ measure, handleInputChange }) => {
  const areaUnits = useSelector((state) => state?.globalUnits.AREA_UNITS);
  const currencyUnits = useSelector(
    (state) => state?.globalUnits.CURRENCY_UNITS
  );
  const units = [areaUnits, currencyUnits];

  return (
    <Box>
      {measure?.map((item, index) => {
        return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '8px',
              gap: '15px',
            }}
            key={index}
          >
            <Typography
              sx={{
                color: 'black',
                fontSize: { sm: '14px', md: '16px', lg: '20px' },
                fontWeight: 400,
              }}
            >
              {item?.label}
            </Typography>
            <Select
              value={item?.value}
              onChange={(e) => handleInputChange(e, item?.name)}
              variant="outlined"
              defaultValue={units[index][0].value}
              fullWidth
              sx={{
                '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                  color: '#4A4A4A',
                },
              }}
            >
              {units[index]?.map((option, optionIndex) => (
                <MenuItem key={optionIndex} value={option.value}>
                  {option.title}
                </MenuItem>
              ))}
            </Select>
          </Box>
        );
      })}
    </Box>
  );
};
export default AreaUnit;
