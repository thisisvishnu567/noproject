import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './ad.css';
import AddForm from './AddForm';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [isAddingAdmin, setIsAddingAdmin] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('http://localhost:3001/admins');
        console.log('Fetched admins:', response.data);
        setAdmins(response.data);
      } catch (error) {
        console.error('There was an error fetching the admins data!', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        console.log('Fetched users:', response.data);
        setUsers(response.data);
      } catch (error) {
        console.error('There was an error fetching the users data!', error);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await fetchAdmins();
      await fetchUsers();
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleDelete = async (id, type) => {
    if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
      try {
        if (type === 'user') {
          setUsers(users.filter(user => user.id !== id));
        } else if (type === 'admin') {
          setAdmins(admins.filter(admin => admin.id !== id));
        }

        await axios.delete(`http://localhost:3001/${type}s/${id}`);
        console.log(`Deleted ${type} with id: ${id}`);
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    }
  };

  const handleEdit = async (item, type) => {
    try {
      let updatedItem;

      if (type === 'user') {
        updatedItem = {
          id: item.id,
          name: item.name,
          phone: item.phone,
          operator: item.operator,
          email: item.email,
          password: item.password
        };

        const updatedUsers = users.map(user => user.id === item.id ? updatedItem : user);
        setUsers(updatedUsers);

        await axios.put(`http://localhost:3001/users/${item.id}`, updatedItem);

      } else if (type === 'admin') {
        updatedItem = {
          id: item.id,
          admin_name: item.admin_name,
          admin_email: item.admin_email,
          admin_password: item.admin_password
        };

        const updatedAdmins = admins.map(admin => admin.id === item.id ? updatedItem : admin);
        setAdmins(updatedAdmins);

        await axios.put(`http://localhost:3001/admins/${item.id}`, updatedItem);

      } else {
        throw new Error(`Invalid type: ${type}`);
      }

      console.log(`Edited ${type}:`, updatedItem);

    } catch (error) {
      console.error('Error editing data:', error);
    }
  };

  const addUser = async (user) => {
    try {
      const newUser = {
        id: user.id,
        name: user.name,
        phone: user.phone,
        operator: user.operator,
        email: user.email,
        password: user.password
      };

      setUsers([...users, newUser]);

      await axios.post('http://localhost:3001/users', newUser);
      console.log('Added new user:', newUser);

    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const addAdmin = async (admin) => {
    try {
      const newAdmin = {
        id: admin.id,
        admin_name: admin.admin_name,
        admin_email: admin.admin_email,
        admin_password: admin.admin_password
      };

      setAdmins([...admins, newAdmin]);

      await axios.post('http://localhost:3001/admins', newAdmin);
      console.log('Added new admin:', newAdmin);

    } catch (error) {
      console.error('Error adding admin:', error);
    }
  };

  const handleAdd = (item, type) => {
    if (type === 'user') {
      addUser(item);
    } else if (type === 'admin') {
      addAdmin(item);
    } else {
      console.error(`Invalid type: ${type}`);
    }
  };

  const handleReturnHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="adminPage">
      <button className="add" onClick={() => setIsAddingUser(true)}>Add User</button>
      <button className="add" onClick={() => setIsAddingAdmin(true)}>Add Admin</button>
      <button className="return-home" onClick={handleReturnHome}>Return to Home Page</button> {/* New button */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="tables">
          <div className="table">
            <h2>Admins</h2>
            <table className="admintable"> {/* Add the class name to apply CSS */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {admins.length > 0 ? (
                  admins.map(admin => (
                    <tr key={admin.id}>
                      <td>{admin.admin_name}</td>
                      <td>{admin.admin_email}</td>
                      <td>
                        <button className="edit" onClick={() => handleEdit(admin, 'admin')}>Edit</button>
                        <button className="delete" onClick={() => handleDelete(admin.id, 'admin')}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="3">No admins available</td></tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="table">
            <h2>Users</h2>
            <table className="admintable"> {/* Add the class name to apply CSS */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Operator</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map(user => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.phone}</td>
                      <td>{user.operator}</td>
                      <td>{user.email}</td>
                      <td>
                        <button className="edit" onClick={() => handleEdit(user, 'user')}>Edit</button>
                        <button className="delete" onClick={() => handleDelete(user.id, 'user')}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="5">No users available</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {isAddingUser && <AddForm type="user" onAdd={(item) => { handleAdd(item, 'user'); setIsAddingUser(false); }} onClose={() => setIsAddingUser(false)} />}
      {isAddingAdmin && <AddForm type="admin" onAdd={(item) => { handleAdd(item, 'admin'); setIsAddingAdmin(false); }} onClose={() => setIsAddingAdmin(false)} />}
    </div>
  );
};

export default AdminPage;
