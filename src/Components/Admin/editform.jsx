import React, { useState } from 'react';

const EditForm = ({ item, onSave, onClose }) => {
  const [formData, setFormData] = useState({ ...item });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="editForm">
      <h2>Edit {item.type}</h2>
      <form onSubmit={handleSubmit}>
        {item.type === 'user' ? (
          <>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
          </>
        ) : (
          <>
            <input type="text" name="admin_name" value={formData.admin_name} onChange={handleChange} placeholder="Name" />
            <input type="email" name="admin_email" value={formData.admin_email} onChange={handleChange} placeholder="Email" />
            <input type="password" name="admin_password" value={formData.admin_password} onChange={handleChange} placeholder="Password" />
          </>
        )}
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditForm;
