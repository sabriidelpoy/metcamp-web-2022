import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import QuestionCard from "../../components/QuestionCard";
import bien from "../../assets/bien.png"
import mal from "../../assets/mal.png"
import medio from "../../assets/medio.png"
import useFetch from "../../hooks/useFetch";

const API_URL = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

function Game() {
    const { questions, loading, error} = useFetch(API_URL)
    
    const [showCorrectAnswers, setShowCorrectAnswers] = useState(false)
    const [selectedAnswers, setSelectedAnswers] = useState([])
    const [result, setResult] = useState({})

    function calculateAndShowResult() {
        const rightAnswers = selectedAnswers.filter((item) => item.answerValue === true)
        setResult({
            correct: rightAnswers.length,
            incorrect: selectedAnswers.length - rightAnswers.length
        })
        setShowCorrectAnswers(true)
    }

    const Resultado = ({ total }) => {
        if (total < 4) {
            return <img alt="mal" src={mal} />
        }
        else if (total >= 4 && total <= 7) {
            return <img alt="medio" src={medio} />
        }
        else {
            return <img alt="bien" src={bien} />
        }
    }

    return (
        <div className="container">
            <section className="section">
                <nav className="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li className="is-active"><Link to="game">Preguntas</Link></li>
                    </ul>
                </nav>
                {loading ? (
                    <div className="box">Loading...</div>
                ) :
                    (
                        <form>
                            {questions.map((question, index) => {
                                return <QuestionCard
                                    selectedAnswers={selectedAnswers}
                                    setSelectedAnswers={setSelectedAnswers}
                                    showCorrectAnswers={showCorrectAnswers}
                                    key={index}
                                    currentQuestion={question}
                                />
                            })}
                        </form>
                    )
                }

                <div className="level" style={{ paddingTop: "15px" }}>
                    <div className="level-left">

                        {showCorrectAnswers &&
                            <>
                                <span style={{ paddingRight: "5px" }}>
                                    {result && <Resultado total={result.correct} />}
                                </span>

                                <span className="tag is-info is-large level-item">Tuviste {result?.correct} correctas y {result?.incorrect} incorrectas</span>
                            </>
                        }


                    </div>
                    <div className="level-right">
                        <button disabled={selectedAnswers.length !== questions.length} className="button is-primary level-item" onClick={() => calculateAndShowResult()} >Validate!!</button>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Game;