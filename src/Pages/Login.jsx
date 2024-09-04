import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login(props){
   
    const [eusername,seteusername] = useState("")
    const [epassword,setepassword] = useState("")
    const [reg,setreg] = useState(true)

    const users = props.users;

    const navigate = useNavigate();

    

   

   const handleusername = (e) =>{
    seteusername(e.target.value)
    
    

   }

   const handlepassword = (e) =>{
    setepassword(e.target.value)

   }


   const handlelogin = () =>{

    var userfound = false;
    
    users.forEach(function(item){
        if(item.username === eusername && item.password === epassword){
            console.log("right ra")
             userfound = true;
             navigate('/landing', {state:{users:eusername}})
            
        }
       
        
    })
    if(userfound == false){
      
      setreg(false)
    }

   }

    return(<>
      <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          <h1 className="text-3xl font-medium">Hey Hi</h1>
          {reg? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">Please Sign Up Before you Login</p>}

          <div className="flex flex-col gap-2 my-2">
            <input
              type="text"
              value={eusername}
              onChange={handleusername}
              placeholder="Username"
              className="border border-black bg-transparent rounded-md p-1 w-52"></input>
            <input
              value={epassword}
              type="text"
              onChange={handlepassword}
              placeholder="Password"
              className="border border-black bg-transparent rounded-md p-1 w-52"></input>
            

              <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={handlelogin}> Login</button>
              <p>Don't have an account? <Link to={'/signup'} className="underline">Sign Up</Link> </p>
          </div>
        </div>
      </div>
    </>)
}