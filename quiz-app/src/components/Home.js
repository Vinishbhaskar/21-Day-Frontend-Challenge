import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import LevelBox from "./LevelBox";

function Home() {
  return (
    <div className="home">
      <div className="intro-box">
        <div className="intro-texts">
          <h1 className="intro-title">English Vocabulary Quizzes</h1>
          <p className="intro-description">Choose the quiz you want to solve</p>
        </div>
        <div className="intro-icon">
          <FaRegQuestionCircle />
        </div>
      </div>

      <div className="level-boxes">
        <LevelBox level="A1" />
        <LevelBox level="A2" />
        <LevelBox level="B1" />
        <LevelBox level="B2" />
        <LevelBox level="C1" />
        <LevelBox level="C2" />
      </div>
    </div>
  );
}

export default Home;
