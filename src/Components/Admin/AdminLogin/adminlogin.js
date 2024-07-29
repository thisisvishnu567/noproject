import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validatePassword } from './validation';
import { loginAdmin } from './auth'; 
import './login.css';

const AdminLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    } else {
      setPasswordError('');
    }

    try {
      const admin = await loginAdmin(email, password); 
      if (admin) {
        setShowSuccessMessage(true);
        setTimeout(() => { setShowSuccessMessage(false); }, 3000);
        onLoginSuccess(); // Call the callback to update isAdmin
        navigate('/admin'); 
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error fetching admin details:', error);
      alert('An error occurred while fetching admin details');
    }
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <div className='login-form'>
          {showSuccessMessage && (<div className='success-message'>Successfully Logged in</div>)}
          <form onSubmit={handleLogin}>
            <input
              type='email'
              placeholder='Admin Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='error-message'>{passwordError}</div>
            <button type='submit'>Login</button>
          </form>
          <div className='register-link'>
            <p>
              Require Admin Access?{' '}
              <Link to='/admin-sign'>Register As Admin</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
