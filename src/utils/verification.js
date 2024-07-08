export const verificationState = (receivedCode, otpReceivedCode) => {
  if (!otpReceivedCode) {
    return {};
  }
  return {
    verified: otpReceivedCode,
    userverfified: receivedCode,
  };
};
