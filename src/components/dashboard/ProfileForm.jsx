'use client';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useFormik } from 'formik';

import RBInput from './RBInput';
import AgentProfiles from '../AgentProfile/AgentProfiles';
import VerificationModal from './modals/VerificationModal';
import { profileValidationSchema } from '../Schemas/profileValidationSchema';
import { handleUserEdit } from '@/src/redux/slices/currentUser/currentUserSlice';

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

export default function ProfileForm({ data, formValues }) {
  const { fields, buttonText } = data;
  const [verifyText, setVerifyText] = useState('unverified');
  const [isVerificationSuccessful, setIsVerificationSuccessful] =
    useState(false);

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const Profile_Keys = {
    profile_image: `${formValues?.profile_image || ''}`,
    about: `${formValues?.about || ''}`,
    address: `${formValues?.address || ''}`,
    city: `${formValues?.city || ''}`,
    country: `${formValues?.country || ''}`,
    email: `${formValues?.email || ''}`,
    first_name: `${formValues?.first_name || ''}`,
    landline_number: `${formValues?.landline_number || ''}`,
    last_name: `${formValues?.last_name || ''}`,
    mobile_number: `${formValues?.mobile_number || ''}`,
    whatsapp: `${formValues?.whatsapp || ''}`,
    // updated_at: '',
  };

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: { ...Profile_Keys, ...formValues },
      validationSchema: profileValidationSchema,
      onSubmit: (values) => {
        // (values.updated_at = `${new Date().toISOString()}`),
        dispatch(handleUserEdit(values));
      },
    });

  const handleModalToggle = () => {
    setOpen(!open);
  };

  const handleVerify = (name) => {
    if (values[name] !== '') {
      setVerifyText('verified');
      setIsVerificationSuccessful(true);
    } else {
      setVerifyText('unverified');
    }
  };

  const handlePhoneChange = (event, key) => {
    if (key == 'Whatsapp') {
      return setFieldValue((values.whatsapp = event));
    } else if (key == 'Mobile') {
      return setFieldValue((values.mobile_number = event));
    } else {
      null;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={1}
        sx={{
          mx: 'auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: { xs: '90%', sm: '70%', md: '70%', lg: '60%' },
          pr: { xs: 2, md: 0 },
          pt: { xs: 2, md: 1 },
          pb: { xs: 2, md: 5 },
        }}
      >
        <Grid item xs={12} md={11} lg={10}>
          <Item>
            <Box
              sx={{ width: '100%', pl: { lg: 5, md: 5 }, pb: { sm: 2, md: 5 } }}
            >
              <AgentProfiles data={formValues} setFieldValue={setFieldValue} />
            </Box>
          </Item>
        </Grid>
        {fields?.map((field, index) => (
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
                  pt: field?.pt,
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
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 1,
                      fontSize: '18px',
                      fontWeight: 600,
                    }}
                  >
                    {field?.label}
                    {field?.label === 'Mobile' && (
                      <span
                        style={{
                          color: `${
                            verifyText === 'verified' ? '#1DBE4F' : '#FD0D1B'
                          }`,
                          fontStyle: 'normal',
                          fontWeight: 400,
                          lineHeight: 'normal',
                        }}
                      >
                        {verifyText === 'verified' ? (
                          <CheckCircleOutlineIcon sx={{ mr: 0.5 }} />
                        ) : (
                          <HighlightOffIcon sx={{ mr: 0.5 }} />
                        )}
                        {verifyText}
                      </span>
                    )}
                  </Typography>

                  {field?.label == 'Whatsapp' ? (
                    <Box sx={{ width: { xs: '100%', lg: '88%' } }}>
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={values?.whatsapp}
                        defaultCountry={'PK'}
                        onChange={(e) => handlePhoneChange(e, field?.label)}
                      />
                      <Typography
                        sx={{
                          pt: 1.5,
                          fontSize: '0.75rem',
                          color: '#d32f2f',
                          textAlign: 'left',
                        }}
                      >
                        {touched?.whatsapp && errors?.whatsapp}{' '}
                      </Typography>
                    </Box>
                  ) : null}
                  {field?.label == 'Mobile' ? (
                    <Box sx={{ width: '100%' }}>
                      <Box
                        sx={{
                          width: '100%',
                          display: { xs: 'block', lg: 'flex' },
                          gap: 1,
                          alignItems: { xs: 'start', lg: 'center' },
                        }}
                      >
                        <PhoneInput
                          id="mobile"
                          placeholder="Enter phone number"
                          value={values?.mobile_number}
                          defaultCountry={'PK'}
                          onChange={(e) => handlePhoneChange(e, field?.label)}
                        />
                        <Button
                          variant="primary"
                          type="button"
                          disabled={
                            verifyText === 'verified' &&
                            values[field?.name] !== ''
                              ? true
                              : false
                          }
                          onClick={() => {
                            handleVerify(field?.name), handleModalToggle();
                          }}
                          sx={{
                            mt: { xs: 2, lg: 0 },
                            width: {
                              xs: '98%',
                              sm: '130px',
                              md: '160px',
                              lg: '100px',
                            },
                            fontSize: '15px',
                            height: { xs: '40px', md: '40px', lg: '30px' },
                            borderRadius: '5px',
                            '&:hover': { color: '#fff' },
                          }}
                        >
                          {'Verify'}
                        </Button>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            pt: 1.5,
                            fontSize: '0.75rem',
                            color: '#d32f2f',
                            textAlign: 'left',
                          }}
                        >
                          {touched?.mobile && errors?.mobile}
                        </Typography>
                      </Box>
                    </Box>
                  ) : null}
                  {field?.label == 'Mobile' ||
                  field?.label == 'Whatsapp' ? null : (
                    <RBInput
                      inputProps={{
                        style: {
                          height: `${field?.label == 'Bio' ? 'auto' : '45px'}`,
                          borderRadius: '5px',
                          border: '1px solid #E7E7E7',
                          fontSize: '15px',
                          fontWeight: 400,
                        },
                      }}
                      sx={{
                        width: field?.width,
                        '& fieldset': { border: 'none' },
                        gap: 1,
                        textAlign: 'left',
                        '& input[type=number]::-webkit-inner-spin-button': {
                          WebkitAppearance: 'none',
                          margin: 0,
                        },
                        '.MuiFormHelperText-contained': {
                          marginLeft: 0.5,
                        },
                      }}
                      rows={field?.rows}
                      name={field?.name}
                      multiline={field?.multiline}
                      value={values[field?.name]}
                      onChange={handleChange}
                      error={
                        errors[field?.name] && touched[field?.name]
                          ? true
                          : false
                      }
                      helperText={
                        (touched[field?.name] && errors[field?.name]) ||
                        field?.helperText
                      }
                      id={
                        (errors[field?.name] && touched[field?.name]) ||
                        field?.id
                          ? 'errors[field?.name] && touched[field?.name]'
                          : null
                      }
                      type={field?.type}
                      place={field?.place}
                    />
                  )}
                </Box>
              </Box>
            </Item>
          </Grid>
        ))}
        {isVerificationSuccessful && (
          <VerificationModal
            onClose={() => setIsVerificationSuccessful(false)}
            onCloseModal={handleModalToggle}
            open={open}
          />
        )}
      </Grid>
      <Button
        type="submit"
        sx={{
          fontSize: '15px',
          ml: { xs: 0, sm: 2.1, md: 4.1, lg: 7 },
          mb: { xs: 3, md: 6 },
          width: { xs: '90%', sm: 'auto', md: '160px' },
          height: { xs: '45px', md: '45px' },
          '&:hover': { color: '#fff' },
        }}
        variant="primary"
        onClick={handleSubmit}
      >
        {buttonText}
      </Button>
    </Box>
  );
}
