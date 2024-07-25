import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from "./Components/Login/login";
import Login from "./Components/SignUp/";

function App(){
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/sign" element = {<Sign/>}/>
      </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;