import React, { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "Which CSS property is used to change text color?",
    options: ["font-style", "color", "text-color", "background-color"],
    correctAnswer: 1
  },
  {
    question: "What is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correctAnswer: 2
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "##", "**"],
    correctAnswer: 1
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: 1
  },

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
