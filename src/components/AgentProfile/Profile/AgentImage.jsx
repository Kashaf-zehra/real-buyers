import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import ButtonBaseDemo from './EditImage';
import EditProfileModal from '@/src/components/dashboard/modals/EditProfileModal';

const AgentImage = ({ data, setFieldValue }) => {
  const [open, setOpen] = useState(false);
  const [photoURL, setPhotoURL] = useState(null);
  const handleOpen = () => setOpen(true);

  return (
    <Grid
      sx={{
        margin: { xs: 'auto', md: 'auto' },
        pt: { xs: 1, sm: 0 },
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <ButtonBaseDemo
        url={data?.profile_image}
        handleOpen={handleOpen}
        data={data}
      />
      <Box
        sx={{
          zIndex: '1',
          position: 'absolute',
          bottom: 0,
          right: 0,
          backgroundColor: '#fff',
          borderRadius: '100%',
          p: 0.5,
        }}
      >
        <EditProfileModal
          open={open}
          setOpen={setOpen}
          currentUserImage={data?.profile_image}
          currData={data}
          setFieldValue={setFieldValue}
          photoURL={photoURL}
          setPhotoURL={setPhotoURL}
          spacificData={data}
          handleOpen={handleOpen}
          sx={{
            backgroundColor: '#fb631c',
            color: '#fff',
            '&:hover': { backgroundColor: '#fb631c', color: '#fff' },
          }}
        />
      </Box>
    </Grid>
  );
};

export default AgentImage;
