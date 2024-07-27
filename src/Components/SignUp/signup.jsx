import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signUp.css';

const Register = () => {
  const [name, setName] = useState('');//Name
  const [email, setEmail] = useState('');//email
  const [password, setPassword] = useState('');//password
  const [Ph, setPh] = useState('');//PhoneNumber
  const [OP, setOperator] = useState('');//PhoneNumber
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
      setPasswordError('Password must be 8 characters long');
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
      Ph,
      OP,
      email,
      password
    };

    try {
      const response = await axios.post('http://localhost:3001/users', userData);

      navigate('/login');

    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className='register-page'>
      <div className='register-container'>
        <div className='register-form'>
          {/* <h1>Register</h1> */}

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
              value={Ph}
              onChange={(e) => setPh(e.target.value.replace(/\D/g, '').slice(0, 10))}
              maxLength={10}
              pattern='\d{10}'
            />

            <select 
              className='dropdownOP'
              type='text'
              placeholder='Operator'
              value={OP}
              onChange={(e) => setOperator(e.target.value)}
            >
              <option>Aircel</option>
              <option>Airtel</option>
              <option>BSNL</option>
              <option>Jio</option>
              <option>Tata DOCOMO</option>
              <option>Vodafone</option>
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
