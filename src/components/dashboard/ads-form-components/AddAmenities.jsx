import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import AmenitiesModal from './AmenitiesModal';

const AddAmenities = ({
  onSelected,
  formik,
  setSelectedAmenities,
  selectedAmenities,
  propertyInformation,
  handleSeletedAmenites,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    onSelected(selectedAmenities);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: { xs: 'center', sm: 'baseline' },
      }}
    >
      <Typography
        sx={{
          textAlign: { xs: 'center', sm: 'start' },
          color: '#666666',
          fontSize: { xs: '14px', md: '18px' },
          fontWeight: 400,
          mb: 1,
        }}
      >
        {propertyInformation?.addiotionalFeature}
      </Typography>
      <Button
        sx={{
          width: '165px',
          height: '45px',
          fontSize: '14px',
          lineHeight: '18.15px',
        }}
        onClick={handleClickOpen}
        variant="outlined"
        startIcon={<AddCircleIcon sx={{ fontSize: '24px !important' }} />}
      >
        {propertyInformation?.addAmentiesLabel}
      </Button>
      <AmenitiesModal
        open={open}
        setOpen={setOpen}
        formik={formik}
        onClose={() => handleClose()}
        data={propertyInformation?.addAmenities}
        propertyInformation={propertyInformation}
        onSelected={setSelectedAmenities}
        setSelectedAmenities={setSelectedAmenities}
        selectedAmenities={selectedAmenities}
        handleSeletedAmenites={handleSeletedAmenites}
      />
    </Box>
  );
};
export default AddAmenities;
