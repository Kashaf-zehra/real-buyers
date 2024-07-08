import { Box, Button, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = ({ onUpload, maxImages }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length <= maxImages) {
        onUpload(acceptedFiles[0].type, acceptedFiles[0]);
      } else {
        console.error('Maximum limit of images reached');
      }
    },
    [onUpload, maxImages]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxFiles: maxImages,
  });

  return (
    <Button
      component={'div'}
      {...getRootProps()}
      sx={{
        width: { xs: '100%', sm: '190px', md: '200px' },
        height: '50px',
        color: '#fff',
        background: '#FB631C',
        borderRadius: '10px',
        border: '1px #FB631C solid',
        '&:hover': {
          backgroundColor: 'white',
          color: '#FB631C',
        },
      }}
    >
      <Box component={'input'} {...getInputProps()} />
      <Typography
        sx={{
          fontSize: { xs: '15px', sm: '17px', md: '20px' },
          textTransform: 'capitalize',
        }}
      >
        Upload Images
      </Typography>
    </Button>
  );
};

export default ImageUploader;
