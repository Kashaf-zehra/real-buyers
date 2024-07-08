'use client';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RBInput from './RBInput';
import { Button, Typography } from '@mui/material';
import RBCheckbox from './RBCheckbox';
import { passwordValidationSchema } from '../Schemas/passwordValidationSchema';
import { useFormik } from 'formik';

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

export default function ProfilePasswordForm({ data }) {
  const { image, passwordfields, checkbox, buttonText } = data;
  const [checkValue, setCheckValue] = useState(false);

  const Password_Keys = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: Password_Keys,
    validationSchema: passwordValidationSchema,
    onSubmit: (values, action) => {
      action.resetForm();
      setCheckValue(false);
    },
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={1}
        sx={{
          mx: 'auto',
          display: 'block',
          backgroundImage: `url('${image}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: { xs: '90%', sm: '70%', md: '70%', lg: '50%' },
          pr: { xs: 2, md: 0 },
          pt: { xs: 2, md: 7 },
          pb: { xs: 2, md: 3 },
        }}
      >
        {passwordfields?.map((field, index) => (
          <Grid
            key={index}
            item
            xs={field?.sizes?.xs}
            sm={field?.sizes?.sm}
            md={field?.sizes?.md}
            lg={field?.sizes?.lg}
          >
            <Item>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  mx: 'auto',
                  pt: { xs: 0 },
                  pl: { lg: 5, md: 2 },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '18px',
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: 'left !important',
                      fontSize: '18px',
                      fontWeight: 500,
                    }}
                  >
                    {field?.label}
                  </Typography>
                  <RBInput
                    sx={{
                      width: field?.width,
                      gap: 1,
                      '& fieldset': { border: 'none' },
                      '.MuiFormHelperText-contained': {
                        marginLeft: 0.5,
                      },
                    }}
                    inputProps={{
                      style: {
                        height: '45px',
                        borderRadius: '5px',
                        border: '1px solid #E7E7E7',
                        fontSize: '15px',
                        fontWeight: 400,
                      },
                    }}
                    name={field?.name}
                    type={field?.type}
                    place={field?.place}
                    value={values[field?.name]}
                    onChange={handleChange}
                    error={
                      errors[field?.name] && touched[field?.name] ? true : false
                    }
                    helperText={
                      (touched[field?.name] && errors[field?.name]) ||
                      field?.helperText
                    }
                    id={
                      (errors[field?.name] && touched[field?.name]) || field?.id
                        ? 'errors[field?.name] && touched[field?.name]'
                        : null
                    }
                  />
                </Box>
              </Box>
            </Item>
          </Grid>
        ))}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'left' }}>
          <RBCheckbox
            label={checkbox?.label}
            checked={checkValue}
            setChecked={setCheckValue}
            sx={{
              ml: { xs: 2, sm: 2, md: 4.2, lg: 7 },
              my: { xs: 1, md: 1 },
              alignItems: 'center',
              color: 'black !important',
            }}
          />
        </Box>
        <Button
          type="submit"
          sx={{
            mt: { xs: 2, sm: 2.1, md: 4.1, lg: 4 },
            ml: { xs: 0, sm: 2.1, md: 4.1, lg: 7 },
            mb: { xs: 3, md: 3 },
            fontSize: '15px',
            width: { xs: '90%', sm: 'auto', md: '160px' },
            height: { xs: '45px', md: '45px' },
            '&:hover': { color: '#fff' },
          }}
          variant="primary"
          onClick={checkValue ? handleSubmit : null}
        >
          {buttonText}
        </Button>
      </Grid>
    </Box>
  );
}
