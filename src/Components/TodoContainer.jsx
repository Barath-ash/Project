import Addtodo from "./Addtodo";
import Todolist from "./Todolist";
import { useState } from "react";

export default function TodoContainer() {

  const [activity, setactivity] = useState([
    {id: 1, activity: "Go for a walk",},
    {id: 2, activity: "Go for a walk",},
]);    

  return (
    <>
      <div className="flex gap-5 flex-wrap">
      <Addtodo activity={activity} setactivity={setactivity}/>
       <Todolist activity={activity} setactivity={setactivity}/>       
      </div>
    </>
  );
}
