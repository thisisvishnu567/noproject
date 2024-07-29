import axios from 'axios';

export const loginUser = async (phone, password) => {
  const response = await axios.get(`http://localhost:3001/users?phone=${phone}&password=${password}`);
  return response.data;
};