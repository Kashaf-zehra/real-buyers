import React, { useState } from 'react';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { FORM_LABEL, LOGIN_FORM, LOGIN_FORM_DATA } from '@/src/constants/Login';

const PasswordFields = ({ handleInputChange }) => {
  const [formData, setFormData] = useState(LOGIN_FORM_DATA?.passwordFields);
  const handleTogglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };
  return (
    <>
      <TextField
        label={FORM_LABEL.password}
        variant="outlined"
        type={formData?.showPassword ? LOGIN_FORM.text : LOGIN_FORM.password}
        fullWidth
        name={LOGIN_FORM.password}
        onChange={handleInputChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                style={{ color: '#444444' }}
                onClick={handleTogglePasswordVisibility}
                edge="end"
              >
                {formData?.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
export default PasswordFields;
