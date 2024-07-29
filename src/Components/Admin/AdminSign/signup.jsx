import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signUp.css';

const Register = () => {
  const [admin_name, setName] = useState('');
  const [admin_email, setEmail] = useState('');
  const [admin_password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
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

    const userData = {
      admin_name,
      admin_email,
      admin_password
    };

    try {
      await axios.post('http://localhost:3001/admins', userData);
      navigate('/admin-login');
    } catch (error) {
      console.error('Error registering Admin:', error);
    }
  };

  return (
    <div className='register-page'>
      <div className='register-container'>
        <div className='register-form'>
          <form onSubmit={handleRegister}>

            
            <input
              type='text'
              placeholder='Name'
              value={admin_name}
              onChange={(e) => setName(e.target.value)}
            />
            
            <div className='error-message'>{emailError}</div>
            <input
              type='text'
              placeholder='Email'
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
              Already An Admin? <Link to='/admin-login'>Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
