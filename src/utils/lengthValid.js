import { VERIFICATION_OTP } from '@/src/constants/Verfication_Modal';

const checkLength = (code) => {
  return Object.values(code).join('')?.length === VERIFICATION_OTP?.length;
};

export { checkLength };
