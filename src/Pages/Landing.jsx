import { useLocation } from "react-router-dom"
import Header from "../Components/Header";
import Card from "../Components/Card";
import TodoContainer from "../Components/TodoContainer";

export default function Landing(){
     
    
    const  data  = useLocation();
    console.log(data) 
   
    return(
        
        <>
        
          <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          {/* Header  */}
          <Header name={data.state.users} />
          <div className="flex justify-between gap-7 my-5 flex-wrap">
          {/* Card Section */}
          <Card bgColor={"#8272DA"} title={"23°C"} subtitle={"Chennai"}/>
          <Card bgColor={"#FD6663"} title={"September 01 "} subtitle={"09:24:59"}/>
          <Card bgColor={"#FCA201"} title={"Build Using"} subtitle={"React"}/>
          </div>
          {/* Todo-section */}
         <TodoContainer/>
        
           
        </div>
      </div>
        
       
        </>
    )
}
