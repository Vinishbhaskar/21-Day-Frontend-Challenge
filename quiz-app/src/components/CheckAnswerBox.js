import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";


function CheckAnswerBox({ question, answer, trueAnswer, questionData }) {
  return (
    <div className={`check-answer-box ${trueAnswer ? "correct" : "wrong"}`}>
      <div className="check-answer-top">
        <div className="check-texts">
          <p className="check-answer-count">Question: {question}</p>
          <h3 className="check-answer-question">{questionData.question}</h3>
        </div>
        <div className="check-icon">{trueAnswer ? <FaCheck/> : <FaTimes/>}</div>
      </div>
      <div className="check-answer-bottom">
        <div className="answer-box">
          <span className="answer-title">Your Answer</span>
          <span className="answer-text">{answer}</span>
        </div>
        <div className="answer-box">
          <span className="answer-title">Correct Answer</span>
          <span className="answer-text">
            {questionData.answers
              .filter((ans) => ans.trueAnswer)
              .map((ans) => ans.answer)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CheckAnswerBox;
