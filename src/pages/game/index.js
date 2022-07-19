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
        <div className="container has-background-primary-light">
            <section className="section">
                <h1 className="title is-1">El juego</h1>
                {loading ? (
                    <div className="box">Loading...</div>
                ) : (
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