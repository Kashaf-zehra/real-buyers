import { ENDPOINTS } from '@/src/constants/apiConstants';
import DynamicAPI from '../../dynamicAPI';

export const resetPassword = async (resetPasswordData) => {
  const endpoint = ENDPOINTS.resetPassword + resetPasswordData.token;
  const method = 'put';

  try {
    const response = await DynamicAPI(endpoint, method, resetPasswordData);

    return response;
  } catch (error) {
    console.error('Error: Unable to reset password:', error);
    throw error;
  }
};
