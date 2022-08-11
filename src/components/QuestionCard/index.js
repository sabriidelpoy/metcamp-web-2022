function QuestionCard({ currentQuestion, showCorrectAnswers, selectedAnswers, setSelectedAnswers }) {

    function selectAnAnswer(id, value) {
        const notThisAnswer = selectedAnswers.filter((item) => item.id !== id)
        setSelectedAnswers([...notThisAnswer, { id: id, answerValue: value }])
    }

    return (
        <div className="box field">
            <div className="columns">
                <p className="column is-full">
                    <span className="tag is-rounded is-info">{currentQuestion.id}</span> {currentQuestion.question}
                </p>
            </div>
            {currentQuestion.answers.map((answerOption, index) => {
                return (
                <div key={index} onChange={() => selectAnAnswer(currentQuestion.id, answerOption.is_correct)}>
                    <input type="radio" id={`${currentQuestion.id}-${index}`} name={currentQuestion.id} value={answerOption.answer} />
                    <label className={showCorrectAnswers ? 
                                        answerOption.is_correct ?
                                            "has-text-primary" : 
                                            "has-text-danger"
                                        : ""
                                    }
                    htmlFor={`${currentQuestion.id}-${index}`}>&nbsp;{answerOption.answer}</label>
                </div>
            )})}
        </div>
    )
}

export default QuestionCard;
