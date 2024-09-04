
import Todoitem from "./Todoitem";

export default function Todolist(props) {
      
     const activity = props.activity
     const setactivity = props.setactivity

  return (
    <>
      <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
        <h1 className="text-2xl font-medium ">Today's Activity</h1>
        
        {(activity.length === 0)? <p>You Haven't Added Any Activity Yet</p>:""}
        {activity.map(function(item,index){
            return(
               <Todoitem item={item}   activity={activity} setactivity={setactivity} index={index}/>
            )
        })}
       
       
      </div>
    </>
  );
}

 
