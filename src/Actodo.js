 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import "../src/index.css"
import Landing from "./Pages/Landing";
import { useState } from "react";


export default function App(){
  const [users,setusers] = useState([
    {
        username:"barath",
        password:"12345"
    },
   ])

return(
  
   <BrowserRouter>
   

   <Routes>
     <Route path='/' element={<Login  users={users} setusers={setusers} />}></Route>
     <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
     <Route path='/landing' element={<Landing/>}></Route>
   </Routes>
   </BrowserRouter>
  
 
)


}

