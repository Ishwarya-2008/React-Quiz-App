import { useState } from "react";
import Result from "./Result";
import Quiz from "./Quiz";
import CategoryGrid from "./CategoryGrid";
import "./index.css";
import questions from "../data/questions";



function App(){
    const [subject, setSubject] = useState(null);
    const [finalScore, setFinalScore] = useState(null);

    function retryQuiz(){
        setFinalScore(null);
    }

    function goHome(){
        setSubject(null);
        setFinalScore(null);
    }

    if(!subject){
        return <CategoryGrid onSelect={setSubject} />
    }

    if(finalScore !== null){
        return <Result score={finalScore} total={questions[subject].length} onRetry={retryQuiz} onHome={goHome} />
    }

    return <Quiz subject={subject} questions={questions[subject]} onFinish={setFinalScore} />
}

export default App;