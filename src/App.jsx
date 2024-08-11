import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/login';
import Sign from './Components/SignUp/signup';
import Home from './Components/Home/home';
import AdminPage from './Components/Admin/admin';
import Loginadmin from './Components/Admin/AdminLogin/adminlogin';
import Signadmin from './Components/Admin/AdminSign/signup';
import About from './Components/About/about';
import Portal from './Components/Assets/Planspage/portal';
// import Test from './Components/Test/test';


function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminLogin = () => {
    setIsAdmin(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/" element={<Home />} />
        <Route path='/wponbnqapl,jplhwroizv95vozd' element={<Loginadmin onLoginSuccess={handleAdminLogin} />} />
        <Route path='/wponbnqapl,jplhwroizv95vozdsign' element={<Signadmin />} />
        <Route path="/admin" element={isAdmin ? <AdminPage /> : <Navigate to="/admin-login" />} />
        <Route path='/portal' element={<Portal/>}/>
        {/* <Route path='/test' element={<Test/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
