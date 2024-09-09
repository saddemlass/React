import { useEffect, useState } from "react"

export default function Timerquestion({timeout,ontimeout}){
    const[remainingtime,setRemainingtime]=useState(timeout);
    useEffect(()=>{
       
       const Timer= setTimeout(ontimeout,timeout);
       console.log('timeout');
       return ()=>{clearTimeout(Timer);};
       
       
    },[timeout,ontimeout])

    
    useEffect(()=>{
      const interval=  setInterval(()=>{
            setRemainingtime((prevremaingtime)=>prevremaingtime-100)
        },100);
        console.log('timeout1');
      return()=>{clearInterval(interval);};


    },[])
    


    return(
        <progress id="question-time" max={timeout} value={remainingtime}/>
    )
}