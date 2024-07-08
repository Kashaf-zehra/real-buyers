'use client';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import RBInput from '../../../RBInput';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  alignItems: 'center',
  display: 'flex',
  border: 'none',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
}));

const InputTextField = ({ textField, formik }) => {
  return (
    <>
      {textField?.map((field, index) => {
        const { label, place, type, rows, name, pt, sizes, width, multiline } =
          field;
        return (
          <Grid
            key={index}
            item
            xs={sizes?.xs}
            sm={sizes?.sm}
            md={sizes?.md}
            lg={sizes?.lg}
          >
            <Item>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  mx: 'auto',
                  pt: pt,
                  pl: { lg: 4, md: 2 },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '20px',
                    pb: '10px',
                  }}
                >
                  <Typography
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 1,
                      color: '#333',
                      fontSize: '20px',
                      fontWeight: 400,
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
                <RBInput
                  sx={{
                    width: width,
                    gap: 1,
                    textAlign: 'left',
                    '& input[type=number]::-webkit-inner-spin-button': {
                      '-webkit-appearance': 'none',
                      margin: 0,
                    },
                  }}
                  rows={rows}
                  name={name}
                  multiline={multiline}
                  onChange={formik?.handleChange}
                  onBlur={formik?.handleBlur}
                  value={formik?.values[name]}
                  error={formik?.touched[name] && Boolean(formik?.errors[name])}
                  type={type}
                  place={`${place}`}
                />
                {formik?.touched[name] && formik?.errors[name] && (
                  <Typography
                    sx={{
                      color: 'red',
                      fontSize: '12px',
                      fontStyle: 'normal',
                      mt: 1,
                    }}
                  >
                    {formik?.errors[name]}
                  </Typography>
                )}
              </Box>
            </Item>
          </Grid>
        );
      })}
    </>
  );
};

export default InputTextField;
