import axios from 'axios';

// Function to authenticate admin
export const loginAdmin = async (email, password) => {
  try {
    const response = await axios.get('http://localhost:3001/admins');
    const admin = response.data.find(
      admin => admin.admin_email === email && admin.admin_password === password
    );
    return admin;
  } catch (error) {
    console.error('Error fetching admin data:', error);
    throw error;
  }
};