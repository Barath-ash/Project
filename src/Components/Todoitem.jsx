export default function Todoitem(props){

     const active = props.activity;
     const setactive = props.setactivity;

        

        const handledelte = (deleteid) =>{
            const temp =  active.filter(function(item){
                if(item.id == deleteid){
                    return false;
                }
                else{
                    return true;
                }
            })
            setactive(temp)
        }


    return(
         

        <>
        <div className="flex justify-between ">
        <p className="">{props.index+1}.{props.item.activity}</p>
        <button onClick={() => {handledelte(props.item.id)}}>Delete</button>
        </div>
        </>
    )
}