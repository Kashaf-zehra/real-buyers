export const handleVerificationChange = (
  index,
  value,
  receivedCode,
  inputValues,
  setVerificationCode,
  setInputValues
) => {
  const { num } = receivedCode[index];
  const newValue = value ? value.slice(-1) : '';
  const newInputValues = [...inputValues];
  newInputValues[index] = newValue;
  setInputValues(newInputValues);
  setVerificationCode((prevCode) => ({
    verified: {
      ...prevCode.verified,
      [num]: value,
    },
  }));
};
