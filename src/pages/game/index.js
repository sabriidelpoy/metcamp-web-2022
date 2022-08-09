import { useState, useEffect } from "react";
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
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li class="is-active"><a href="#" aria-current="page">Preguntas</a></li>
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