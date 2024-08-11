import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signUp.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [operator, setOperator] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    } else {
      setConfirmPasswordError('');
    }

    const userData = {
      name,
      phone,
      operator,
      email,
      password
    };

    try {
      await axios.post('http://localhost:3001/users', userData);
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type='tel'
              placeholder='Phone Number'
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
              maxLength={10}
            />

            <select 
              className='dropdownOP'
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
            >
              <option value=''>Select Operator</option>
              <option value='Aircel'>Aircel</option>
              <option value='Airtel'>Airtel</option>
              <option value='BSNL'>BSNL</option>
              <option value='JIO'>JIO</option>
              <option value='Tata DOCOMO'>Tata DOCOMO</option>
              <option value='Vodafone'>Vodafone</option>
            </select>
            
            <div className='error-message'>{emailError}</div>
            <input
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className='error-message'>{passwordError}</div>
            <input
              type='password'
              placeholder='Password'
              value={password}
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
              Already have an account? <Link to='/login'>Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;