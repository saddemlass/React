import completedImg from "../assets/quiz-complete.png";
import question from "../question";
export default function Summary({userAnswers}){
    const skippedanswers=userAnswers.filter((answer)=>answer===null);
    const correctanswers=userAnswers.filter((answer,index)=>answer=question[index].answers[0]);
    const skipedshare=(skippedanswers.length/userAnswers.length)*100;
    const correctshare=(correctanswers.length/userAnswers.length)*100;
    const wrongshare=100-correctshare-skipedshare;
    return(
        <div id="summary">
        <img src={completedImg} alt="Quiz Completed" />
        <h2>Quiz Completed</h2>
        <div id="#summary-stats">
           
        <p>
                <span className="number">{skipedshare}

                </span>
                <span className="text"> skipped </span>
            </p>
            <p>
                <span className="number">{correctshare}

                </span>
                <span className="text">correct answers</span>
            </p>
            <p>
                <span className="number"> {wrongshare}

                </span>
                <span className="text"> wrong answers </span>
            </p>
            <ol>
                {userAnswers.map((answer,index)=> 
                
                { let cssclasees="user-answer";
                    if(answer===null){
                        cssclasees+=' skipped'
                    } 
                    else if(answer===question[index].answers[0]){
                        cssclasees+=' correct'
                    }
                    else{
                        cssclasees+=' wrong'
                    } return(
                    
                    <li >
                    <h3>{index+1} </h3>
                    <p className="question">{question[index].text} </p>
                    <p className={cssclasees}>{answer} </p>
                </li>
                )})}
                
            </ol>
        </div>
    </div>
    )
}