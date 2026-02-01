import { useEffect, useState } from "react";

function Quiz({ subject, questions, onFinish }) {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(null);
    const [time, setTime] = useState(10);

    const currentQuestion = questions[index];

    useEffect(() => {
        if (time === 0) {
            nextQuestion();
            return;
        }

        const timer = setTimeout(() => {
            setTime(time - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [time]);

    function handleOptionClick(option) {
        setSelected(option);

        if (option === currentQuestion.answer) {
            setScore(score + 1);
        }
    }

    function nextQuestion() {
        setSelected(null);
        setTime(10);

        if (index + 1 < questions.length) {
            setIndex(index + 1);
        } else {
            onFinish(score);
        }
    }

    return (
        <div className="quiz-box">
            <h2>{subject.toUpperCase()} Quiz</h2>
            <p>Question {index + 1} / {questions.length}</p>
            <p className="timer">⏱ {time}s</p>

            <h3>{currentQuestion.question}</h3>

            {currentQuestion.options.map((opt) => (
                <button
                    key={opt}
                    className={`option-btn ${selected === opt
                            ? opt === currentQuestion.answer
                                ? "correct"
                                : "wrong"
                            : ""
                        }`}
                    disabled={selected !== null}
                    onClick={() => handleOptionClick(opt)}
                >
                    {opt}
                </button>
            ))}

            {selected && (
                <button className="next-btn" onClick={nextQuestion}>
                    Next
                </button>
            )}
        </div>
    );
}

export default Quiz;

