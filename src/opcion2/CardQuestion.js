import React from "react";

function CardQuestion({ currentQuestion, handleAnswerOptionClick }) {
  return (
    <div className="question-container">
      <div className="question-section">
        <div className="question-text">{currentQuestion.question}</div>
      </div>
      <div className="answer-section">
        {currentQuestion.answers.map((answerOption, index) => (
          <button key={index}
            onClick={() => handleAnswerOptionClick(answerOption.is_correct)}
          >
            {answerOption.answer}
          </button>
        ))}
      </div>
    </div>
  );
}
export default CardQuestion;
