import React, { useRef } from 'react';
import Image from 'next/image';
import { Box, Radio, Typography, useMediaQuery } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import InputTextField from './InputTextField';

const CreditCardType = ({
  textField,
  setTypeCard,
  cardTypeImage,
  handleChange,
  creditCardLabel,
  selectedValue,
  handleChangeRadioButton,
  formik,
  NAME_ON_CARD,
}) => {
  const gridRef = useRef(null);
  const isSmallScreen = useMediaQuery('(max-width:450px)');

  const handleClick = () => {
    handleChangeRadioButton({ target: { value: NAME_ON_CARD } });
    setTypeCard();
  };

  return (
    <>
      <Box
        ref={gridRef}
        onClick={handleClick}
        sx={{
          mx: { lg: '32px', xl: '40px' },
          my: '30px',
          width: '100%',
          height: '70px',
          backgroundColor:
            selectedValue === NAME_ON_CARD ? '#EDF7FF' : 'transparent',
          border: '1px solid #E9E9E9',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
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
            checked={selectedValue === NAME_ON_CARD}
            onChange={handleChangeRadioButton}
            value="name_on_card"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
            sx={{ color: '#126FAA !important' }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '70px', sm: '80px', md: '100px' },
            '@media (min-width: 280px) and (max-width: 400px)': {
              left: '35px',
            },
          }}
        >
          <Typography
            sx={{
              color: '#333',
              fontSize: { xs: '11px', sm: '20px' },
              '@media (max-width: 295px)': {
                fontSize: '10.5px',
              },
              fontStyle: 'normal',
              fontWeight: 600,
            }}
          >
            {creditCardLabel}
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            left: { xs: '200px', sm: '300px', md: '360px' },
            '@media (min-width: 280px) and (max-width: 299px)': {
              left: '148px',
            },
            '@media (min-width: 300px) and (max-width: 400px)': {
              left: '160px',
            },
            display: 'flex',
            gap: { xs: 0.5, sm: 1 },
          }}
        >
          {cardTypeImage?.map((item, index) => (
            <Image
              key={index}
              src={item?.icon}
              width={isSmallScreen ? 20 : 44}
              height={28}
              alt={item?.alt}
            />
          ))}
        </Box>

        <Box
          sx={{
            position: 'absolute',
            right: { xs: '0%', sm: '3.5%' },
            '@media (min-width: 280px) and (max-width: 400px)': {
              right: '0px',
            },
          }}
        >
          {selectedValue === NAME_ON_CARD ? (
            <KeyboardArrowDownIcon
              fontSize="large"
              sx={{ color: '#666', fontSize: { xs: '26px', sm: '35px' } }}
            />
          ) : (
            <KeyboardArrowRightIcon
              fontSize="large"
              sx={{ color: '#666', fontSize: { xs: '26px', sm: '35px' } }}
            />
          )}
        </Box>
      </Box>
      {selectedValue === NAME_ON_CARD && (
        <InputTextField
          textField={textField}
          handleChange={handleChange}
          formik={formik}
        />
      )}
    </>
  );
};
export default CreditCardType;
