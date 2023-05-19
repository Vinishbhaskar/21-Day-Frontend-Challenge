import React from "react";
import {useLocation } from "react-router-dom";
import ResultBox from "../components/ResultBox";
import CheckAnswerBox from "../components/CheckAnswerBox";

function Result() {
  const location = useLocation();
  const allAnswers = location.state.answers;
  const allQuestions = location.state.questions;

  let percentile = 0;

  allAnswers.forEach((item) => {
    if (item.trueAnswer) {
      percentile += 1;
    }
  });

  return (
    <div className="result">
      <ResultBox percentile={percentile} totalQuestions={allQuestions.length} />
      <h2 className="check-answers-title">Check Correct Answers</h2>
      <div className="check-answers-boxes">
        {allAnswers.map((answer, index) => (
          <CheckAnswerBox
            key={index}
            question={index + 1}
            answer={answer.answer}
            trueAnswer={answer.trueAnswer}
            questionData={allQuestions[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default Result;
