import Timerquestion from "./timerquestion"
import Answer from "./answer"
export default function Question({text,selectedanswers,a, answeredQuest,answerlist,onSkipanswers,onselectanswer }){
    return(
        <div className="question">
            <Timerquestion  timeout={15000} ontimeout={ a===''?onSkipanswers:null} />
            <h2>{text}</h2>
              
              <Answer answeredQuestion={answeredQuest} selectedanswers={selectedanswers }
              answers={answerlist}
              onselect={onselectanswer}/>
            </div>
    )
}