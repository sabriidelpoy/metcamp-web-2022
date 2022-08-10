import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import QuestionCard from "../../components/QuestionCard";

const API_URL = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

function Game() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setQuestions(data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

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
                            return <QuestionCard key={index} currentQuestion={question} />
                        })}
                    </form>
                )
                }
            </section>
        </div>
    )
}

export default Game;