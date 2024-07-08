import { ENDPOINTS } from '@/src/constants/apiConstants';
import DynamicAPI from '../../dynamicAPI';

export const login = async (loginData) => {
  const endpoint = ENDPOINTS.login;
  const method = 'post';

  try {
    const response = await DynamicAPI(endpoint, method, loginData);

    return response;
  } catch (error) {
    console.error('Error: Unable to login:', error);
    throw error;
  }
};
