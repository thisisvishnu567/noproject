import axios from 'axios';

export const loginUser = async (phonenumber, password) => {
  const response = await axios.get(`http://localhost:3001/users?phonenumber=${phonenumber}&password=${password}`);
  return response.data;
};