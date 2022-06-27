import React from "react";

function CardQuestion({ currentQuestion, handleAnswerOptionClick }) {
  return (
    <div className="question-container">
      <div className="question-section">
        <div className="question-text">{currentQuestion.questionText}</div>
      </div>
      <div className="answer-section">
        {currentQuestion.answerOptions.map((answerOption, index) => (
          <button key={index}
            onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}
export default CardQuestion;
