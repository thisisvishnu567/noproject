import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from "./Components/Login/login";
import Sign from "./Components/SignUp/signup";
import Home from "./Components/Home/home";

function App(){
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/sign" element = {<Sign/>}/>
        <Route path = "/home" element = {<Home/>}/>
      </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;