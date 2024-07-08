'use client';
import React from 'react';
import { Typography, Box, TextField } from '@mui/material';

const PropertyInformation = ({ postData, formik }) => {
  const specialIndex = 1;
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: { xs: 1, sm: 2 },
        }}
      >
        {postData?.addInfo.map((item, index) => (
          <Box
            sx={{
              width: '100%',
              height: 'auto',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'center', sm: 'start' },
              justifyContent: { xs: 'center', md: 'center' },
              gap: 2,
              pb: { xs: 1, sm: 2 },
            }}
            key={index}
          >
            <Box sx={{ width: { xs: '90%', sm: '45px' }, pl: '0 !important' }}>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  gap: 1.5,
                }}
              >
                <Box
                  component={'img'}
                  src={item?.image}
                  sx={{ width: { xs: 37, sm: 47 }, height: { xs: 35, sm: 45 } }}
                  alt={'purpose'}
                />
                <Typography
                  sx={{
                    color: '#333333',
                    fontSize: { xs: '18px', sm: '20px' },
                    fontWeight: 400,
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
                  gap: 1,
                  mt: 0.8,
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    color: '#333333',
                    fontSize: { xs: '18px', sm: '20px' },
                    fontWeight: 400,
                    display: { xs: 'none', sm: 'flex' },
                    mb: 2,
                  }}
                >
                  {item?.text}
                  <span style={{ marginLeft: '5px', color: '#FF0000' }}>*</span>
                </Typography>
                <TextField
                  placeholder={item?.placeholder}
                  sx={{
                    mb: 1,
                    width: { xs: '100%', lg: '741px' },
                    '& textarea': {
                      minHeight: index === specialIndex ? '192px' : '0',
                    },
                    '& fieldset': {
                      border: formik?.errors[item?.label]
                        ? 'solid 1px red'
                        : '1px solid #E7E7E7',
                      borderRadius: '10px',
                    },
                  }}
                  inputProps={{
                    sx: {
                      '&::placeholder': {
                        fontSize: { xs: '15px', md: '18px' },
                      },
                    },
                  }}
                  name={item?.label}
                  value={formik?.values[item?.label]}
                  onBlur={formik?.handleBlur}
                  error={
                    formik?.touched[item?.label] &&
                    Boolean(formik?.errors[item?.label])
                  }
                  onChange={formik?.handleChange}
                  multiline
                />
                {formik?.errors[item?.label] && (
                  <Typography
                    sx={{
                      position: 'absolute',
                      bottom: '-10px',
                      color: 'red',
                    }}
                  >
                    {formik?.errors[item?.label]}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
export default PropertyInformation;
