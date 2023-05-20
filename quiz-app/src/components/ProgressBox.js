import React from "react";
import { FaRegChartBar } from "react-icons/fa";

function ProgressBox({ level, currentQuestion, totalQuestions }) {
  return (
    <div className="progress-box">
      <div className="progress-top">
        <div className="progress-texts">
          <h2 className="progress-title">Quiz Progress</h2>
          <p className="progress-description">
            You are solving {level} quiz.
          </p>
        </div>
        <div className="progress-icon">
          <FaRegChartBar />
        </div>
      </div>
      <div className="progress-bottom">
        <div
          className="progress-circle"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{
            "--value": ((currentQuestion + 1) / totalQuestions) * 100,
          }}
        >
          <span className="progress-big">{currentQuestion + 1}</span>
          <span className="progress-mini">/{totalQuestions}</span>
        </div>
        <p className="progress-detail">
          You solve the {currentQuestion + 1}. question out of a total of{" "}
          {totalQuestions} questions
        </p>
      </div>
    </div>
  );
}

export default ProgressBox;
