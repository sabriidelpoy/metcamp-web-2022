import React, { useState, useEffect } from "react";
import CardQuestion from "./CardQuestion";
import "./Game.css";

export function Game() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestionsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetch(
          "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter"
        );
        const data = await response.json();
        setQuestionsData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
      /* Otra opción. Definir cual nos parece mas sencilla
            const fetchData = () =>
            fetch("https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter")
            .then(response => response.json())
            .then(data => setQuestionsData(data))
            .catch(() => console.log(error))
            .finally(() => setLoading(false));
            */
    })();
  }, []);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleScoreClick = () => {
    setShowScore(score);
  };

  return (
    <div className="game">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {questions.map((question, index) => {
            return (
              <CardQuestion
                key={index}
                currentQuestion={question}
                handleAnswerOptionClick={handleAnswerOptionClick}
              />
            );
          })}
          <button className="button-send" onClick={() => handleScoreClick()}>
            Enviar
          </button>
          {showScore && (
            <div className="score-section">
              Tu puntaje es {score} de {questions.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
