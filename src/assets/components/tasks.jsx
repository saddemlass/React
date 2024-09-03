import Newtask from "./newtask";

export default function Tasks({tasks,onAdd,ondelete}){
    return(
        <section>
            <h1> new task</h1>
            <Newtask onAdd={onAdd}/>
            
           {(tasks.length===0 && <p> these project have nos task yet </p>) }
           {tasks.length>0&& 
           
           <ul>
            {tasks.map((task)=>
            <li key={task.id}>
                <span>{task.text} </span>
                <button onClick={()=>ondelete(task.id)}>delete</button>
            </li>)}
            </ul>
           
           }

        
          
        </section>
    )
}