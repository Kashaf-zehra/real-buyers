import React from 'react';
import { Modal, Box } from '@mui/material';

import Facilities from './Facilities';

const AmenitiesModal = (props) => {
  const {
    onClose,
    open,
    data,
    onSelected,
    formik,
    setOpen,
    propertyInformation,
    setSelectedAmenities,
    selectedAmenities,
    handleSeletedAmenites,
  } = props;

  const handleClose = () => {
    handleSeletedAmenites();
    onClose();
  };

  const handleCancelButton = () => {
    handleSeletedAmenites();
    onClose();
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
            width: { xs: '92%', lg: '1400px' },
            bgcolor: 'background.paper',
            borderRadius: '20px',
            height: '687px',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Facilities
              formik={formik}
              cancel={handleCancelButton}
              facilitiesData={data}
              propertyInformation={propertyInformation}
              onSelected={onSelected}
              setOpen={setOpen}
              setSelectedAmenities={setSelectedAmenities}
              selectedAmenities={selectedAmenities}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AmenitiesModal;
