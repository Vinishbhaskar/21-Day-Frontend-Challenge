import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import LevelBox from "../components/LevelBox";

function Home() {
  return (
    <div className="home">
      <div className="intro-box">
        <div className="intro-texts">
          <h1 className="intro-title">FrontEnd Developement Quizzes</h1>
          <p className="intro-description">Choose the quiz you want to solve</p>
        </div>
        <div className="intro-icon">
          <FaRegQuestionCircle />
        </div>
      </div>

      <div className="level-boxes">
        <LevelBox level="HTML" />
        <LevelBox level="CSS" />
        <LevelBox level="JavaScript" />
        <LevelBox level="ReactJs" />
        <LevelBox level="NodeJs" />
        <LevelBox level="Frontend" />
      </div>
    </div>
  );
}

export default Home;
