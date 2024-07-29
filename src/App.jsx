import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/login';
import Sign from './Components/SignUp/signup';
import Home from './Components/Home/home';
import AdminPage from './Components/Admin/admin';
import Loginadmin from './Components/Admin/AdminLogin/adminlogin';
import Signadmin from './Components/Admin/AdminSign/signup';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminLogin = () => {
    setIsAdmin(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/" element={<Home />} />
        <Route path='/admin-login' element={<Loginadmin onLoginSuccess={handleAdminLogin} />} />
        <Route path='/admin-sign' element={<Signadmin />} />
        <Route path="/admin" element={isAdmin ? <AdminPage /> : <Navigate to="/admin-login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
