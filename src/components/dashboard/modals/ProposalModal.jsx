'use client';
import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import Image from 'next/image';
import { MODAL_GIF } from '@/src/constants/Preview_Data';

const SubmissionModal = ({
  title,
  description,
  buttonLabel,
  open,
  onClose,
}) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: { xs: '90%', sm: '500px' },
            height: { xs: 'auto', sm: '400px' },
            backgroundColor: '#fff',
            borderRadius: '10px',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Image src={MODAL_GIF || ''} alt={'gif'} width={120} height={100} />
          <Typography
            sx={{
              color: '#333333',
              fontWeight: 500,
              fontSize: { xs: '25px', md: '30px' },
              lineHeight: { xs: '32px', md: '36.31px' },
              textAlign: 'center',
              my: description ? 2 : 4,
            }}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              sx={{
                color: '#333333',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '19.36px',
                textAlign: 'center',
                my: 2,
              }}
            >
              {description || ''}
            </Typography>
          )}
          <Button
            variant="primary"
            onClick={onClose}
            sx={{
              width: '135px',
              height: '40px',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '19.36px',
              textAlign: 'center',
              backgroundColor: '#fff',
              color: '#fff',
              border: '1px solid #FF631C',
            }}
          >
            {buttonLabel || ''}
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default SubmissionModal;
