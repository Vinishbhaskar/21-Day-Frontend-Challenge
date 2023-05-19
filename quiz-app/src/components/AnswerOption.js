import React from "react";

function AnswerOption({ index, answer, selected, selectAnswer }) {
  return (
    <label
      onClick={() => selectAnswer(index)}
      htmlFor={index}
      className={`answer-label ${selected ? "selected" : ""}`}
    >
      {answer}
      <input type="radio" name="answer" id={index} />
    </label>
  );
}

export default AnswerOption;
