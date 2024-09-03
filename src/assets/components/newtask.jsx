import { useState } from "react"

export default function Newtask({onAdd}){
    const[entredvalue,setentredvalue]=useState();
    function hundlechange(event){
        setentredvalue(event.target.value)
    }
    function onclicktask(){
        onAdd(entredvalue);
        setentredvalue('')
    }

    return(
        <div>
            <input type="text"  onChange={(event)=>hundlechange(event)} value={entredvalue}/>
            <button onClick={onclicktask}>add task</button>
        </div>
    )
}