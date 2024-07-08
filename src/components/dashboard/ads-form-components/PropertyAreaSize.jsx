'use client';
import React, { useState } from 'react';
import { Typography, Box, TextField, Autocomplete } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { createPropertySizeState } from '@/src/utils/propertySizeInfo';

const PropertyAreaSize = ({
  propertySizeInformation,
  propertyBuyingDetails,
  selectCity,
  aeraSizes,
  currency,
  formik,
}) => {
  const [propertyData] = useState(
    createPropertySizeState(
      propertySizeInformation,
      propertyBuyingDetails,
      selectCity
    )
  );

  return (
    <>
      {propertyData?.propertySizeAndAmount?.propertySize?.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'start' },
            justifyContent: { xs: 'center', md: 'center' },
            gap: 2,
            pb: { xs: 2, sm: 2 },
          }}
        >
          <Box
            sx={{
              width: { xs: '90%', sm: '45px' },
              pl: '0 !important',
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <Box
                component={'img'}
                src={item?.image}
                sx={{ width: { xs: 37, sm: 47 }, height: { xs: 35, sm: 45 } }}
                alt={'areasize'}
              />
              <Typography
                sx={{
                  fontSize: { xs: '17px', sm: '20px' },
                  fontWeight: 400,
                  color: '#333333',
                  display: { xs: 'flex', sm: 'none' },
                }}
              >
                {item?.text}
                <span style={{ marginLeft: '5px', color: '#FF0000' }}>*</span>
              </Typography>
            </Box>
          </Box>

          <Box sx={{ width: { xs: '90%', sm: '80%', md: '80%', lg: '70%' } }}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                gap: 2,
                mt: 0.8,
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '17px', sm: '20px' },
                  fontWeight: 400,
                  color: '#333333',
                  display: { xs: 'none', sm: 'flex' },
                }}
              >
                {item?.text}
                <span style={{ marginLeft: '5px', color: '#FF0000' }}>*</span>
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                  gap: '10px',
                }}
              >
                <TextField
                  placeholder={item?.placeholder}
                  type="number"
                  sx={{
                    width: { xs: '100%', sm: `calc(100% - ${160}px)` },
                    fontSize: '18px',
                    fontWeight: 400,
                    color: '#969696',
                    '& input[type=number]': {
                      MozAppearance: 'textfield',
                    },
                    '& input[type=number]::-webkit-outer-spin-button': {
                      WebkitAppearance: 'none',
                      margin: 0,
                    },
                    '& input[type=number]::-webkit-inner-spin-button': {
                      WebkitAppearance: 'none',
                      margin: 0,
                    },
                    '& fieldset': {
                      border: formik?.errors[item?.label]
                        ? 'solid 1px red'
                        : '1px solid #E7E7E7',
                      borderRadius: '10px',
                    },
                  }}
                  InputProps={{
                    style: {
                      fontSize: { xs: '15px', md: '18px' },
                    },
                  }}
                  name={item?.label}
                  onChange={formik?.handleChange}
                  value={formik?.values[item?.label]}
                  onBlur={formik?.handleBlur}
                  error={
                    formik?.touched[item?.label] &&
                    Boolean(formik?.errors[item?.label])
                  }
                />
                <Autocomplete
                  name={item?.unit}
                  value={formik?.values[item?.unit]}
                  disablePortal
                  id="combo-box-demo"
                  options={item?.label == 'area' ? aeraSizes : currency}
                  popupIcon={
                    <KeyboardArrowDownIcon sx={{ color: '#777777' }} />
                  }
                  sx={{
                    width: { xs: '100%', sm: '160px' },
                    '& fieldset': {
                      border: formik?.errors[item?.label]
                        ? 'solid 1px red'
                        : '1px solid #E7E7E7',
                      borderRadius: '10px',
                    },
                    '& .css-1v0wyq6-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-clearIndicator':
                      {
                        color: '#777777',
                        display: 'inline-flex',
                        '&:hover': {
                          color: '#777777',
                        },
                      },
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={item?.dropPlaceholder}
                      InputLabelProps={{
                        sx: {
                          fontSize: { xs: '14px', md: '15px', lg: '17px' },
                          fontWeight: 400,
                          color: '#969696',
                          mr: 10,
                        },
                      }}
                    />
                  )}
                  onChange={(e, value) => {
                    formik?.handleChange(item?.unit)(value || '');
                  }}
                />
              </Box>
              {(formik?.errors[item?.label] || formik?.errors[item?.unit]) && (
                <Typography
                  sx={{
                    position: 'absolute',
                    bottom: '-25px',
                    color: 'red',
                  }}
                >
                  {'Please enter and select values'}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};
export default PropertyAreaSize;
