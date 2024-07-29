import React, { useState } from 'react';

const AddForm = ({ type, onAdd, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [operator, setOperator] = useState('');
  const [password, setPassword] = useState('');
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = type === 'user' ? {
      id: Date.now().toString(),
      name,
      email,
      phone,
      operator,
      password,
    } : {
      id: Date.now().toString(),
      admin_name: adminName,
      admin_email: adminEmail,
      admin_password: adminPassword,
    };

    onAdd(newItem);
    
    // Reset fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setOperator('');
    setPassword('');
    setAdminName('');
    setAdminEmail('');
    setAdminPassword('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {type === 'user' ? (
          <>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type='text'
              placeholder='Phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type='text'
              placeholder='Operator'
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              required
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </>
        ) : (
          <>
            <input
              type='text'
              placeholder='Admin Name'
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
              required
            />
            <input
              type='email'
              placeholder='Admin Email'
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              required
            />
            <input
              type='password'
              placeholder='Admin Password'
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              required
            />
          </>
        )}
        <button type='submit'>Add {type}</button>
        <button type='button' className='cancel' onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddForm;
