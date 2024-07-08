import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Image from 'next/image';

const OrderSummary = ({
  title,
  Total,
  buttonText,
  cart,
  totalPrice,
  connects,
  dollarRate,
  modalButtonText,
  successMessage,
  confirmOrderLable,
  setIsModalOpen,
  isModalOpen,
  handleChange,
  state,
}) => {
  const { paymentMedthod } = useSelector((state) => state.PakageCart);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <Box
      sx={{
        width: '100%',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        px: { xs: 3, sm: 4.5, md: 3.5, lg: 3 },
      }}
    >
      <Box sx={{ borderBottom: '2px solid #E4E4E4', p: 3 }}>
        <Typography variant="h4">{title}</Typography>
      </Box>

      {cart?.text && (
        <Box
          sx={{
            borderBottom: '2px solid #E4E4E4',
            py: 3,
            display: { xs: 'block', sm: 'flex', md: 'block', lg: 'flex' },
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '18px', md: '16px', lg: '20px' },
                mb: { xs: 1, sm: 0, md: 1, lg: 0 },
              }}
            >
              {cart?.text}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ color: '#333', fontWeight: 400, fontSize: '18px' }}
            >
              Rs: {cart?.price}
            </Typography>
          </Box>
        </Box>
      )}

      {connects?.your_new_connects_balance_will_be > 0 ? (
        <Box
          sx={{
            borderBottom: '2px solid #E4E4E4',
            py: 3,
            display: { xs: 'block', sm: 'flex', md: 'block', lg: 'flex' },
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '18px', md: '16px', lg: '20px' },
                mb: { xs: 1, sm: 0, md: 1, lg: 0 },
              }}
            >
              {'connects '} ({connects?.new_connects})
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: '#333', fontWeight: 400 }}>
              {'Rs:'}
              {Math.round(connects?.your_account_will_be_charged * dollarRate)}
            </Typography>
          </Box>
        </Box>
      ) : null}

      <Box
        sx={{
          pb: 3,
          pt: 2.5,
          display: { xs: 'block', sm: 'flex', md: 'block', lg: 'flex' },
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '20px', sm: '22px' },
              mb: { xs: 1, sm: 0, md: 1, lg: 0 },
            }}
          >
            {Total}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ color: '#126FAA' }}>
            Rs.{totalPrice}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: '100%', pb: 3, pt: 1 }}>
        <Button
          onClick={handleChange}
          sx={{
            width: '100%',
            height: '60px',
            borderRadius: '10px',
            color: '#fff',
            backgroundColor: `${paymentMedthod ? '#777' : '#fb631c'}`,
            '&:hover': {
              backgroundColor: '#fb631c',
              color: '#EDF7FF',
            },
            fontSize: '16px',
          }}
          variant={!paymentMedthod && 'primary'}
          disabled={paymentMedthod && state}
        >
          {paymentMedthod ? confirmOrderLable : buttonText}
        </Button>
      </Box>
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            width: { xs: '80%', sm: '500px' },
            height: '400px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            textAlign: 'center',
            borderRadius: '10px',
            boxShadow:
              '-4px -4px 11px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          }}
        >
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mx: 'auto !important',
                pb: { xs: '20px', sm: '50px' },
              }}
            >
              <Image
                src={'/images/success.gif'}
                width={100}
                height={40}
                alt={'success'}
                sx={{ mx: 'auto' }}
              />
            </Box>
            <Typography
              id="modal-modal-title"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: '#333',
                textAlign: 'center',
                fontSize: '30px',
                fontWeight: 500,
                fontStyle: 'normal',
                lineHeight: 'normal',
              }}
            >
              {successMessage}
            </Typography>
            <Button
              variant="primary"
              onClick={handleModalClose}
              sx={{
                color: '#fff',
                height: '40px',
                textAlign: 'center',
                fontSize: '16px',
                fontWeight: 500,
                fontStyle: 'normal',
                lineHeight: 'normal',
                my: 7,
              }}
            >
              {' '}
              {modalButtonText}{' '}
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default OrderSummary;
