// VideoUploader.js
import React, { useCallback } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';

const VideoUploader = ({ onUpload, maxVideos }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length <= maxVideos) {
        onUpload(acceptedFiles[0].type, acceptedFiles[0]);
      } else {
        console.error('Maximum limit of videos reached');
      }
    },
    [onUpload, maxVideos]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'video/*',
    maxFiles: maxVideos,
  });

  return (
    <Button
      component={'div'}
      {...getRootProps()}
      sx={{
        width: { xs: '100%', sm: '190px', md: '200px' },
        height: '50px',
        color: '#FB631C',
        background: 'white',
        borderRadius: '10px',
        border: '1px #FB631C solid',
        '&:hover': {
          backgroundColor: '#FB631C',
          color: '#fff',
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
        Upload Videos{' '}
      </Typography>
    </Button>
  );
};

export default VideoUploader;
