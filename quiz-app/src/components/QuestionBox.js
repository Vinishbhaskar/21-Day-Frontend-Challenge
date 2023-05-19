import React from "react";

function QuestionBox({ currentQuestion, question, time }) {
  return (
    <div className="question-box">
      <div className="question-text">
        <h2 className="question-title">Question: {currentQuestion + 1}</h2>
        <h3 className="question">{question}</h3>
      </div>
      <div
        className="progress-circle time"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ "--value": (time / 30) * 100 }}
      >
        <span className="time">{time}</span>
      </div>
    </div>
  );
}

export default QuestionBox;
