import React from "react";

function CardQuestionRadio({ currentQuestion, handleAnswerOptionClick }) {
  return (
    <div className="question-container box">
      <div className="question-section">
        <div className="question-text">{currentQuestion.question}</div>
      </div>
      <div className="answer-section">
        {currentQuestion.answers.map((answerOption, index) => (
          <div key={index}>
            <input type="radio" id={`${currentQuestion.id}-${index}`} name={currentQuestion.id} value={answerOption.answer} onClick={() => handleAnswerOptionClick(currentQuestion.id, answerOption.is_correct)} />
            <label className="radio" htmlFor={`${currentQuestion.id}-${index}`}>{answerOption.answer}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CardQuestionRadio;
