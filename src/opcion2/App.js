import React, { useState } from "react";
import { questions } from "../questions";
import CardQuestion from "./CardQuestion";
import "./App.css";
export default function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleScoreClick = () => {
    setShowScore(score);
  };

  return (
    <div className="app">
      <>
        {questions.map((question, index) => {
          return (
            <CardQuestion
			  key={index}
              currentQuestion={question}
              handleAnswerOptionClick={handleAnswerOptionClick}
            />
          );
        })}
        <button className='button-send' onClick={() => handleScoreClick()}>Enviar</button>
        {showScore && (
        <div className="score-section">
          Tu puntaje es {score} de {questions.length}
        </div>
        )}
      </>
    </div>
  );
}
