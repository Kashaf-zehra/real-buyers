import React, { useRef } from 'react';
import { Box, Radio, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import InputTextField from './InputTextField';
import { isSelectedAccount } from '@/src/utils/payment';

const AccountType = ({
  AccountName,
  textField,
  handleChange,
  setTypeCard,
  formik,
  selectedValue,
  handleChangeRadioButton,
}) => {
  const gridRef = useRef(null);

  const handleClick = () => {
    handleChangeRadioButton({
      target: { value: AccountName.toLowerCase().replace(/\s/g, '') },
    });
    setTypeCard();
  };

  const isSelected = isSelectedAccount(selectedValue, AccountName);

  return (
    <>
      <Box
        ref={gridRef}
        container
        onClick={handleClick}
        sx={{
          border: '1px solid #E9E9E9',
          height: '70px',
          width: '100%',
          display: 'flex',
          backgroundColor: isSelected ? '#EDF7FF' : 'transparent',
          alignItems: 'center',
          mx: { lg: '32px', xl: '40px' },
          my: '10px',
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
            checked={isSelected}
            value={AccountName.toLowerCase().replace(/\s/g, '')}
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
          }}
        >
          <Typography
            sx={{
              color: '#333',
              fontSize: { xs: '12.1px', sm: '20px' },
              fontStyle: 'normal',
              fontWeight: 600,
            }}
          >
            {AccountName}
          </Typography>
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
          {isSelected ? (
            <KeyboardArrowDownIcon
              fontSize="large"
              sx={{ color: '#666', fontSize: { xs: '26px', sm: '38px' } }}
            />
          ) : (
            <KeyboardArrowRightIcon
              fontSize="large"
              sx={{ color: '#666', fontSize: { xs: '26px', sm: '38px' } }}
            />
          )}
        </Box>
      </Box>
      {isSelected && (
        <InputTextField
          textField={textField}
          handleChange={handleChange}
          formik={formik}
        />
      )}
    </>
  );
};

export default AccountType;
