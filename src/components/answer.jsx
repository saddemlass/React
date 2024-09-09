import { useRef } from "react";

export default function Answer( {answers,selectedanswers,answeredQuestion,onselect}){
  const  shuffledanswers= useRef();
  if(!shuffledanswers.current) {
    // Shuffle answers once per question
    shuffledanswers.current = [...answers];
    shuffledanswers.current.sort(() => Math.random() - 0.5);
}   

    return(
    
    <ul className="answers">
    {shuffledanswers.current.map((answer) => {  
        const isSelected = selectedanswers === answer;
        let cssClass = '';
        if (isSelected && answeredQuestion === 'answered') cssClass = 'selected';
        else if (isSelected && (answeredQuestion === 'correct' || answeredQuestion === 'wrong')) {
            cssClass = answeredQuestion;
        }
        return( 
            <li className="answer" key={answer}>
                <button disabled={answeredQuestion!==''} onClick={()=> onselect(answer)}  className={cssClass}>{answer}</button>
            </li>
        )}

      
    )}
</ul>)
}