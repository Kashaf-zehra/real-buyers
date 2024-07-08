import React from 'react';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';

import { useSelector } from 'react-redux';
import LoginCard from '../../LoginSignup/Login/LoginCard';

const ModalSignin = ({ handleClose }) => {
  const isModalOpen = useSelector((state) => state.signin.open);
  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: 'flex',
        }}
      >
        <Box
          sx={{
            margin: 'auto',
          }}
        >
          <LoginCard handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default ModalSignin;
