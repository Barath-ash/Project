import { useState } from "react"
 

export default function Addtodo(props){

  const active = props.activity;
  const setactive = props.setactivity;


        const [ipvalue,setipvalue] = useState("")
        
        const iphandle = (e) =>{
            setipvalue(e.target.value)
        }

        const handleadd =  () =>{
          setactive([...active,{id:active.length+1,activity:ipvalue}])
          setipvalue("")

        } 

    return(<>
          <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-medium">Manage Activities</h1>
          <div>
            <input value={ipvalue} onChange={iphandle}
              placeholder="Next Activity?"
              type="text"
              className="p-1  border border-black rounded-md bg-transparent outline-none"
            />
            <button onClick={handleadd} className="bg-black text-white p-1 border border-black rounded-md">
              Add
            </button>
          </div>
        </div>

    </>)
}