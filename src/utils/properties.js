import DynamicAPI from './dynamicAPI';
import { ENDPOINTS } from '@/src/constants/apiConstants';

export const addProperties = async (profileData, jwtToken) => {
  const endpoint = ENDPOINTS.addProperties;
  const method = 'post';

  try {
    const response = await DynamicAPI(endpoint, method, profileData, jwtToken);

    console.log('Profile added successfully:', response);
    return response;
  } catch (error) {
    console.error('Error adding profile:', error);
    throw error;
  }
};

export const fetchProperties = async (jwtToken) => {
  const endpoint = ENDPOINTS.properties;
  const method = 'get';

  try {
    const response = await DynamicAPI(endpoint, method, null, jwtToken);

    console.log('Agent chats retrieved successfully:', response);
    return response;
  } catch (error) {
    console.error('Error fetching agent chats:', error);
    throw error;
  }
};
