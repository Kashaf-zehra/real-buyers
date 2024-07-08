import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

export default function RBUpload({ sx, onChange, onClick }) {
  const visuallyHiddenInputStyle = {
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  };

  return (
    <IconButton component="label" size="small" sx={sx} onClick={onClick}>
      <EditIcon fontSize="inherit" />
      <input type="file" style={visuallyHiddenInputStyle} onChange={onChange} />
    </IconButton>
  );
}
