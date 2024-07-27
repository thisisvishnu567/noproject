import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from "./Components/Login/login";
import Sign from "./Components/SignUp/signup";
import Home from "./Components/Home/home";
import Auth from "./Components/OTP page/otp";

function App(){
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/sign" element = {<Sign/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/auth" element = {<Auth/>}/>
      </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App; 