import { useCallback, useRef, useState, useEffect } from "react"
import question from "../question";
import completedImg from "../assets/quiz-complete.png"
import Timerquestion from "./timerquestion";
import Answer from "./answer";
import Question from "./question";
import Summary from "./summary";

export default function Quiz() {
   
    const [answeredQuestion, setAnsweredQuestion] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);
   

    const questionIndex = answeredQuestion === '' ? userAnswers.length : userAnswers.length - 1;
    const quizCompleted = questionIndex === question.length;

 

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setAnsweredQuestion('answered');
        setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);

        const timer = setTimeout(() => {
            if (selectedAnswer === question[questionIndex].answers[0]) {
                setAnsweredQuestion('correct');
                console.log('correct');
            } else {
                setAnsweredQuestion('wrong');
                console.log('wrong');
            }

            // Reset after 2 seconds
            setTimeout(() => {
                setAnsweredQuestion('');
            }, 2000);

        }, 1000);

        return () => clearTimeout(timer);
    }, [questionIndex]);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizCompleted) {
        return (
           <Summary userAnswers={userAnswers} />
        );
    }

   
    return (
        <div id="quiz">
            <Question key={questionIndex}
             text={question[questionIndex].text}
             a={userAnswers}
              answeredQuest={answeredQuestion} selectedanswers={userAnswers[userAnswers.length - 1]}
            answerlist={question[questionIndex].answers} onselectanswer={handleSelectAnswer} 
            onSkipanswers={handleSkipAnswer}/>

        </div>
    );
}
