import { TextField } from '@mui/material';
import React from 'react';

const RBInput = ({
  label,
  place,
  defaultValue,
  id,
  sx,
  helperText,
  value,
  type,
  error,
  name,
  rows,
  multiline,
  inputProps,
  onChange,
  ...props
}) => {
  return (
    <>
      <TextField
        fullWidth
        type={type}
        InputProps={inputProps}
        sx={sx}
        id={id}
        name={name}
        value={value}
        error={error}
        label={label}
        helperText={helperText}
        placeholder={place}
        defaultValue={defaultValue}
        multiline={multiline}
        rows={rows}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default RBInput;
