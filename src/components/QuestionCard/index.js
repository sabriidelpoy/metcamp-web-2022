function QuestionCard({ currentQuestion }) {
    return (
        <div className="box field">
            <div className="columns">
                <p className="column is-full">
                    <span className="tag is-rounded is-info">{currentQuestion.id}</span> {currentQuestion.question}
                </p>
            </div>
            {currentQuestion.answers.map((answerOption, index) => (
                <div key={index}>
                    <input type="radio" id={`${currentQuestion.id}-${index}`} name={currentQuestion.id} value={answerOption.answer} />
                    <label className="radio" htmlFor={`${currentQuestion.id}-${index}`}>&nbsp;{answerOption.answer}</label>
                </div>
            ))}
        </div>
    )
}

export default QuestionCard;
