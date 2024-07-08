import { ENDPOINTS } from '@/src/constants/apiConstants';
import DynamicAPI from '../../dynamicAPI';

export const loginWithGoogle = async () => {
  const endpoint = ENDPOINTS.loginWithGoogle;
  const method = 'post';

  try {
    const response = await DynamicAPI(endpoint, method);

    return response;
  } catch (error) {
    console.error('Error: Unable to loginWithGoogle with Google:', error);
    throw error;
  }
};
