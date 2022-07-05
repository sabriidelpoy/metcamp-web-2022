import React, { useState, useEffect } from "react";
import CardQuestionRadio from "./CardQuestionRadio";
import "./Game.css";

export function Game() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState([]);
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
  
  const handleAnswerOptionClick = (index, isCorrect) => {
    const updatedScore = [...score];
    updatedScore[index-1] = isCorrect ? 1 : 0;
    console.log(updatedScore);
    setScore(updatedScore);
  };

  const handleScoreClick = () => {
    setShowScore(true);
  };

  const formatScore = () => {
    let points = 0;

    for (const value of score) {
      points += value;
    }

    return points
  }

  return (
    <div className="game">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {!showScore && (
            <div>
              {questions.map((question, index) => {
                return (
                  <CardQuestionRadio
                    key={index}
                    currentQuestion={question}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                  />
                );
              })}
              <button className="button-send" onClick={() => handleScoreClick()}>
                Enviar
              </button>
            </div>
          )}
          {showScore && (
            <div className="score-section">
              Tu puntaje es {formatScore()} de {questions.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
