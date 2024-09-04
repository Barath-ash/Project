import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Signup (props) {

  const [susername,setsusername] = useState("")
  const [spassword,setspassword] = useState("")
  const [cpass,setcpass] = useState("")
  const [confirmp,setconfirmp] = useState(true)

  const navigate = useNavigate()

    const users = props.users;
    const setusers = props.setusers;

    const adduser = () =>{
      if(spassword == cpass){
        setusers([...users,{username: susername, password: spassword}])
        console.log("sucess")
        navigate('/')
      }
      else{
        setconfirmp(false);
      }
    
    }

   
    
     const userhandle= (e)=>{
      setsusername(e.target.value)
     }
     const passhandle= (e)=>{
       setspassword(e.target.value)
     }

     const confirmpass= (e) =>{
      setcpass(e.target.value)

     }

  return (
    <>
      <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          <h1 className="text-3xl font-medium">Hey Hi</h1>
          <p>Sign up here :)</p>

          <div className="flex flex-col gap-2 my-2">
            <input
              type="text"
              value={susername}
              onChange={userhandle}
              placeholder="Username"
              className="border border-black bg-transparent rounded-md p-1 w-52"></input>
            <input
              value={spassword}
              onChange={passhandle}
              type="password"
              placeholder="Password"
              className="border border-black bg-transparent rounded-md p-1 w-52"></input>

            <input
              type="password"
              value={cpass}
              onChange={confirmpass}
              placeholder="Confirm Password"
              className="border border-black bg-transparent rounded-md p-1 w-52"></input>
              {confirmp?
              ""
              :  <p className="text-red-500 text-sm">Those passwords didn’t match. Try again.</p>}
              <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={adduser}> Sign up</button>
              <p>Already have an account? <Link to={'/'}
              className="underline">Login</Link> </p>
          </div>
        </div>
      </div>
    </>
  );
}
 
