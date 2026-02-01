function Result ({score,total,onRetry,onHome}){
    const wrong = total - score;
    const percent = Math.round((score / total) * 100);

    return(
        <div className="quiz-box">
            <h2>Quiz Result</h2>
            <p>Total Questions : {total}</p>
            <p>You scored {score} out of {total}</p>
            <p>Percentage: {percent}%</p>
            <p>Wrong Answers: {wrong}</p>
            <button onClick={onRetry}>Retry Quiz</button>
            <button onClick={onHome}>Back to Home</button>
        </div>
    );
}

export default Result;