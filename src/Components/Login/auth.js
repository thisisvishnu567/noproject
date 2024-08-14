import axios from 'axios';

export const loginUser = async (phone, password) => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/login/');
    const users = response.data;

    const user = users.find(user => user.phone === phone && user.password === password);

    return user || null;
  } catch (error) {
    console.error('Error logging in:', error.response || error.message);
    throw new Error('An error occurred while fetching user details');
  }
};