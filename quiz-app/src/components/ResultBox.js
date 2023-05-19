import React from "react";
import { Link } from "react-router-dom";
// import Image from "";



function ResultBox({ percentile, totalQuestions }) {
  return (
    <div className="result-box">
      <div className="result-bg">
        <span className="percentile">{Math.round((percentile / totalQuestions) * 100)}%</span>
        {/* <img src={Image} alt="result" /> */}
      </div>
      <p className="result-detail">
        You answered {percentile} out of {totalQuestions} questions correctly!
      </p>
      <Link to="/" className="new-quiz">
        Start a new quiz!
      </Link>
    </div>
  );
}

export default ResultBox;
