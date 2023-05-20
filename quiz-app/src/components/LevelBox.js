import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function LevelBox({ level }) {
  return (
    <div className="level-box">
      <div className="level-text">
        <h2 className="level-name">{level}</h2>
        <span>Easy</span>
      </div>
      <Link className="level-link" to={`/quiz/${level}`}>
        <span>Start Quiz</span> <FaArrowRight />
      </Link>
    </div>
  );
}

export default LevelBox;
