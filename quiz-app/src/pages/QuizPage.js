import React, { useState, useEffect } from "react";
import { useQuizContext } from "../context/QuizContext";
import { useNavigate, useParams } from "react-router-dom";
import { FaRegChartBar, FaArrowRight, FaExclamationTriangle } from "react-icons/fa";
import ProgressBox from "../components/ProgressBox";
import QuestionBox from "../components/QuestionBox";
import AnswerOption from "../components/AnswerOption";

function Quiz() {
  const { level } = useParams();
  const navigate = useNavigate();

  const { questions, currentQuestion, setCurrentQuestion } = useQuizContext();

  const [isNextButton, setIsNextButton] = useState(false);
  const [isResultButton, setIsResultButton] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [time, setTime] = useState(30);
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [isResult, setIsResult] = useState(false);

  const selectAnswer = (index) => {
    if (currentQuestion === questions[level].length - 1) {
      setIsNextButton(false);
      setIsResultButton(true);
    } else {
      setIsNextButton(true);
    }
    setSelectedIndex(index);
  };

  const nextQuestion = (index) => {
    if (currentQuestion >= questions[level].length - 1) {
      addAnswer(index);
      setCurrentQuestion(0);
      setIsResult(true);
    } else {
      setTime(30);
      setIsNextButton(false);
      addAnswer(index);
      setCurrentQuestion(currentQuestion + 1);
      setSelectedIndex();
    }
  };

  const addAnswer = (index) => {
    const selectedAnswer =
      index !== null
        ? questions[level][currentQuestion].answers[index]
        : {
            answer: "React Js",
            trueAnswer: false,
          };
    const newAnswers = [...selectedAnswers, selectedAnswer];
    setSelectedAnswers(newAnswers);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    time <= 5 ? setIsErrorMessage(true) : setIsErrorMessage(false);
    if (time < 0) {
      nextQuestion(null);
    }
    return () => clearInterval(timer);
  }, [time]);

  const goToResultPage = () => {
    navigate("/result", {
      state: {
        answers: selectedAnswers,
        questions: questions[level],
      },
    });
  };

  return isResult ? (
    goToResultPage()
  ) : (
    <div>
      <ProgressBox
        level={level}
        currentQuestion={currentQuestion}
        totalQuestions={questions[level].length}
      />
      <QuestionBox
        currentQuestion={currentQuestion}
        question={questions[level][currentQuestion].question}
        time={time}
      />

      <div className="answers-boxes">
        {questions[level][currentQuestion].answers.map((answer, index) => (
          <AnswerOption
            key={index}
            index={index}
            answer={answer.answer}
            selected={selectedIndex === index}
            selectAnswer={selectAnswer}
          />
        ))}
      </div>

      {isNextButton && (
        <div className="next">
          <button
            onClick={() => nextQuestion(selectedIndex)}
            type="button"
            className="next-btn"
          >
            Next Question
            <div className="icon">
              <FaArrowRight />
            </div>
          </button>
        </div>
      )}

      {isResultButton && (
          <div className="next">
          <button
            onClick={() => nextQuestion(selectedIndex)}
            type="button"
            className="next-btn result-btn"
            >
            See Results
            <div className="icon">
              <FaRegChartBar />
            </div>
          </button>
          </div>
      )}
      {isErrorMessage && (
          <div className="message animation">
          <div className="icon">
            <FaExclamationTriangle />
          </div>
          <span>You must hurry up!</span>
          </div>
      )}
    </div>);
}

export default Quiz;
