import React, { useRef } from 'react';
import Image from 'next/image';
import { Box, Radio, Typography } from '@mui/material';
import { maskAccountNumber } from '@/src/utils/payment';

const GeneralCard = ({
  image,
  setSelectedValue,
  cardName,
  accountNumber,
  handleChangeRadioButton,
  setCardTypeNumber,
  cardNo,
  setTypeCard,
  typeCard,
}) => {
  const gridRef = useRef(null);
  const finalValue = cardName;
  const viweDetails = () => {
    setCardTypeNumber(accountNumber);
    setTypeCard(cardNo);
  };

  const handleClick = () => {
    setSelectedValue('');
    setTypeCard(cardNo);
  };

  return (
    <>
      <Box
        ref={gridRef}
        onClick={handleClick}
        sx={{
          border: '1px solid #E9E9E9',
          height: '70px',
          width: '100%',
          mx: { lg: '32px', xl: '40px' },
          display: 'flex',
          alignItems: 'center',
          my: '10px',
          cursor: 'pointer',
          backgroundColor: cardNo === typeCard ? '#EDF7FF' : 'transparent',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '0%', sm: '2%' },
          }}
        >
          <Radio
            checked={cardNo === typeCard}
            onChange={handleChangeRadioButton}
            onClick={viweDetails}
            value={finalValue}
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
            sx={{
              color: '#126FAA !important',
            }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '70px', sm: '80px', md: '100px' },
            '@media (min-width: 280px) and (max-width: 400px)': {
              left: '50px',
            },
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mr: 2,
            }}
          >
            <Image src={image} width={40} height={20} alt="card" />
          </Box>
          <Box>
            <Typography
              sx={{
                color: '#333',
                fontSize: { xs: '12.1px', sm: '20px' },
                fontStyle: 'normal',
                fontWeight: 600,
              }}
            >
              {cardName}
            </Typography>
            <Typography
              sx={{
                color: '#969696',
                fontSize: { xs: '12.1px', sm: '18px' },
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              {maskAccountNumber(accountNumber)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GeneralCard;
