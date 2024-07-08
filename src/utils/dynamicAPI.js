import axios from 'axios';

const apiUrl = 'https://realbuyerz-production.up.railway.app'; // base URL

const DynamicAPI = async (endpoint, method, payload, jwtToken) => {
  const url = `${apiUrl}/${endpoint}`;

  const headers = {
    'Content-Type': 'application/json',
  };

  if (jwtToken) {
    headers['Authorization'] = `Bearer ${jwtToken}`;
  }

  let response;

  if (method?.toLowerCase() === 'get') {
    response = await axios.get(url, { headers });
  } else if (method?.toLowerCase() === 'post') {
    response = await axios.post(url, payload, { headers });
  } else if (method?.toLowerCase() === 'put') {
    response = await axios.put(url, payload, { headers });
  } else if (method?.toLowerCase() === 'patch') {
    response = await axios.patch(url, { headers });
  } else if (method?.toLowerCase() === 'delete') {
    response = await axios.delete(url, { headers });
  } else {
    throw new Error('Invalid HTTP method');
  }

  return response.data;
};

export default DynamicAPI;
