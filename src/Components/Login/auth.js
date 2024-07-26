import axios from 'axios';

export const loginUser = async (email, password) => {
  const response = await axios.get(`http://localhost:3001/users?email=${email}&password=${password}`);
  return response.data;
};