import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import jsonData from "./data.json";

function Quiz() {
  const questions = JSON.parse(JSON.stringify(jsonData));

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      <h1 className="title">HTML Assessment</h1>

      {showScore ? (
        <div>
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>

          <h2>Click Belove Button To Restart Assessment</h2>
          <button>
            <Link to="/" lassName="link">
              Restart Assessment
            </Link>
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
