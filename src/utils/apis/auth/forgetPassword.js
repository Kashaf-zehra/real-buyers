import { ENDPOINTS } from '@/src/constants/apiConstants';
import DynamicAPI from '../../dynamicAPI';

export const forgetPassword = async (forgetPasswordData) => {
  const endpoint = ENDPOINTS.forgetPassword;
  const method = 'post';

  try {
    const response = await DynamicAPI(endpoint, method, forgetPasswordData);

    return response;
  } catch (error) {
    console.error('Error: Unable to sent reset password link:', error);
    throw error;
  }
};
