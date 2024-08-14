import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/;

    if (value === '' || (regex.test(value) && value.length <= 10)) {
      setPhone(value);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setPhoneError('');
    setPasswordError('');
    setServerError('');

    if (phone.length !== 10) {
      setPhoneError('Please enter a valid 10-digit phone number');
      return;
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        phone,
        password
      });

      if (response.data.success) {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
          navigate('/');
        }, 3000);
      } else {
        setPasswordError(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
      setServerError('An error occurred while logging in');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          {showSuccessMessage && <div className="success-message">Successfully Logged in</div>}
          <form onSubmit={handleLogin}>
            <div className="error-message">{phoneError}</div>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={handlePhoneChange}
              maxLength="10"
            />
            <div className="error-message">{passwordError}</div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <div className="register-link">
            <p>
              Don't have an account?{' '}
              <Link to="/sign">Register here</Link>
            </p>
          </div>
          {serverError && <div className="error-message">{serverError}</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
