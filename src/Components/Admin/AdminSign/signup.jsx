import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signUp.css';

const AdminRegister = () => {
  const [admin_name, setName] = useState('');
  const [admin_email, setEmail] = useState('');
  const [admin_password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(admin_email)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }

    if (admin_password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    } else {
      setPasswordError('');
    }

    if (admin_password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    } else {
      setConfirmPasswordError('');
    }

    const adminData = {
      admin_name,
      admin_email,
      admin_password
    };

    try {
      const response = await axios.post(`http://127.0.0.1:8000/admin/`, adminData);
      console.log('Admin registration successful:', response.data);
      navigate('/wponbnqapl,jplhwroizv95vozd');
    } catch (error) {
      console.error('Error registering admin:', error);
      setServerError('An error occurred during registration. Please try again.');
    }
  };

  return (
    <div className='register-page'>
      <div className='register-container'>
        <div className='register-form'>
          <form onSubmit={handleRegister}>
            <input
              type='text'
              placeholder='Admin Name'
              value={admin_name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className='error-message'>{emailError}</div>
            <input
              type='text'
              placeholder='Admin Email'
              value={admin_email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className='error-message'>{passwordError}</div>
            <input
              type='password'
              placeholder='Password'
              value={admin_password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className='error-message'>{confirmPasswordError}</div>
            <input
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button type='submit'>Register</button>
          </form>

          <div className='login-link'>
            <p>
              Already an admin? <Link to='/admin-login'>Login here</Link>
            </p>
          </div>
          {serverError && <div className='error-message'>{serverError}</div>}
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
