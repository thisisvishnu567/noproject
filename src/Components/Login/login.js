import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from './validation';
import { loginUser } from './auth';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      alert('Password must be at least 6 characters long');
      return;
    }

    try {
      const user = await loginUser(email, password);
      if (user.length > 0) {
        setShowSuccessMessage(true);
        setTimeout(() => { setShowSuccessMessage(false); }, 3000);
        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      alert('An error occurred while fetching user details');
    }
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <div className='login-form'>
          <h1>Login</h1>
          {showSuccessMessage && ( <div className='success-message'>Successfully Logged in</div> )}
          <form onSubmit={handleLogin}>
            <input
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='error-message'>{emailError}</div>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>Login</button>
          </form>
          <div className='register-link'>
            <p>
              Don't have an account?{' '}
              <Link to='/sign'>Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;