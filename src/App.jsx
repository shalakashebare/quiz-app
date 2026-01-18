import React, { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Tool Markup Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks Text Mark Language"
    ],
    correctAnswer: 1
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correctAnswer: 2
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    correctAnswer: 3
  },
  {
    question: "Which hook is used to manage state in React?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    correctAnswer: 1
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Microsoft", "Facebook", "Amazon"],
    correctAnswer: 2
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(-1);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const nextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(-1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(-1);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="quiz-container">
      {!quizFinished ? (
        <>
          <h2>
            Question {currentQuestion + 1} of {questions.length}
          </h2>

          <p className="question">
            {questions[currentQuestion].question}
          </p>

          {questions[currentQuestion].options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name="option"
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)}
              />
              {option}
            </label>
          ))}

          <button
            onClick={nextQuestion}
            disabled={selectedOption === -1}
          >
            Next
          </button>
        </>
      ) : (
        <div className="result">
          <h2>Quiz Completed</h2>
          <p>Score: {score}</p>
          <p>Total Questions: {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}

export default App;
