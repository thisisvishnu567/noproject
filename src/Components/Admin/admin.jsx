import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ad.css';
import AddForm from './AddForm';
import EditForm from './editform';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [isAddingAdmin, setIsAddingAdmin] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const navigate = useNavigate(); // Define navigate using useNavigate

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/admin/');
        console.log('Fetched admins:', response.data);
        setAdmins(response.data);
      } catch (error) {
        console.error('There was an error fetching the admins data!', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/user/');
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
        await axios.delete(`http://127.0.0.1:8000/${type}/${id}/`);
        
        if (type === 'user') {
          setUsers(users.filter(user => user.id !== id));
        } else if (type === 'admin') {
          setAdmins(admins.filter(admin => admin.id !== id));
        }

        console.log(`Deleted ${type} with id: ${id}`);
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    }
  };

  const handleEdit = async (item, type) => {
    setEditingItem({ ...item, type });
  };

  const submitEdit = async (updatedItem) => {
    try {
      const { type, id, ...data } = updatedItem;

      const url = `http://127.0.0.1:8000/${type}/${id}/`;
      await axios.put(url, data);

      if (type === 'user') {
        const updatedUsers = users.map(user => user.id === id ? updatedItem : user);
        setUsers(updatedUsers);
      } else if (type === 'admin') {
        const updatedAdmins = admins.map(admin => admin.id === id ? updatedItem : admin);
        setAdmins(updatedAdmins);
      }

      setEditingItem(null);
      console.log(`Updated ${type}:`, updatedItem);

    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const addUser = async (user) => {
    try {
      const newUser = {
        id: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        password: user.password
      };

      const response = await axios.post('http://127.0.0.1:8000/user/', newUser);
      setUsers([...users, response.data]);

      console.log('Added new user:', response.data);

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

      const response = await axios.post('http://127.0.0.1:8000/admin/', newAdmin);
      setAdmins([...admins, response.data]);

      console.log('Added new admin:', response.data);

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
    navigate('/'); // Use navigate here
  };

  return (
    <div className="adminPage">
      <button className="add" onClick={() => setIsAddingUser(true)}>Add User</button>
      <button className="add" onClick={() => setIsAddingAdmin(true)}>Add Admin</button>
      <button className="return-home" onClick={handleReturnHome}>Return to Home Page</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="tables">
          <div className="table">
            <h2>Admins</h2>
            <table className="admintable">
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
            <table className="admintable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
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
                      <td>{user.email}</td>
                      <td>
                        <button className="edit" onClick={() => handleEdit(user, 'user')}>Edit</button>
                        <button className="delete" onClick={() => handleDelete(user.id, 'user')}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="4">No users available</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {isAddingUser && <AddForm type="user" onAdd={(item) => { handleAdd(item, 'user'); setIsAddingUser(false); }} onClose={() => setIsAddingUser(false)} />}
      {isAddingAdmin && <AddForm type="admin" onAdd={(item) => { handleAdd(item, 'admin'); setIsAddingAdmin(false); }} onClose={() => setIsAddingAdmin(false)} />}
      {editingItem && <EditForm item={editingItem} onSave={submitEdit} onClose={() => setEditingItem(null)} />}
    </div>
  );
};

export default AdminPage;
