import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import CongratsModal from './CongratulationModal';
import { handleVerificationChange } from '@/src/utils/codeValidation';
import { saveVerificationCode } from '@/src/redux/slices/verification/verificationSlice';
import { VERIFICATION_OTP } from '@/src/constants/Verfication_Modal';
import { verificationState } from '@/src/utils/verification';
import { isInputValid } from '@/src/utils/inputValid';
import { checkLength } from '@/src/utils/lengthValid';

const VerificationCode = ({ receivedCode, otpReceivedCode }) => {
  const [isVerificationSuccessful, setIsVerificationSuccessful] =
    useState(false);
  const [open, setOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState(
    verificationState(receivedCode, otpReceivedCode)
  );
  const [verificationResult, setVerificationResult] = useState();
  const [inputValues, setInputValues] = useState(['', '', '', '']);
  const handleChange = (index, value) => {
    handleVerificationChange(
      index,
      value,
      receivedCode,
      inputValues,
      setVerificationCode,
      setInputValues
    );
  };
  const code = verificationCode.verified;
  const isValid = isInputValid(code);
  const isLengthValid = checkLength(code);
  const dispatch = useDispatch();
  const handleConfirm = () => {
    if (isValid && isLengthValid) {
      setVerificationResult(VERIFICATION_OTP.verificationSuccessfully);
      setIsVerificationSuccessful(true);
      setIsVerificationSuccessful && handleModalToggle();
      dispatch(saveVerificationCode(verificationCode.verified));
    } else {
      setVerificationResult(VERIFICATION_OTP.verificationFail);
    }
  };
  const handleModalToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {receivedCode.map((code, index) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '5px',
              border: '1px solid #126FAA',
              background: '#FFF',
              boxShadow: '1px 2px 5px 1px rgba(0, 0, 0, 0.25)',
              height: '60px',
              width: '60px',
              padding: '10px',
              marginRight: '10px',
            }}
            key={index}
          >
            <Typography
              sx={{
                color: '#126FAA',
                textAlign: 'center',
                fontSize: '20px',
              }}
            >
              <TextField
                value={inputValues[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                type="number"
                placeholder={code.placeHolderNumber}
                sx={{
                  '& input[type=number]::-webkit-inner-spin-button': {
                    WebkitAppearance: 'none',
                    margin: 0,
                  },
                  '& fieldset': { border: 'none' },
                }}
                InputProps={{
                  style: {
                    color: '#126FAA',
                    fontSize: 18,
                    fontWeight: 400,
                    lineHeight: 24.2,
                    textAlign: 'center',
                  },
                }}
              />
            </Typography>
          </Box>
        ))}
      </Box>
      <Button
        style={{
          background: '#126FAA',
          color: 'white',
          fontWeight: '500px',
          fontSize: '20px',
          width: '150px',
          borderRadius: '10px',
        }}
        onClick={handleConfirm}
      >
        {VERIFICATION_OTP.confirm}
      </Button>
      {isVerificationSuccessful && (
        <CongratsModal
          onClose={() => setIsVerificationSuccessful(false)}
          open={open}
          onCloseModal={handleModalToggle}
        />
      )}
      {verificationResult && <Box>{verificationResult}</Box>}
    </>
  );
};

export default VerificationCode;
