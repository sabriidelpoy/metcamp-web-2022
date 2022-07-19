function QuestionCard({ currentQuestion }) {
    return (
        <div className="box field">
            <p className="is-size-5">{currentQuestion.question}</p>
            {currentQuestion.answers.map((answerOption, index) => (
                <div key={index}>
                    <input type="radio" id={`${currentQuestion.id}-${index}`} name={currentQuestion.id} value={answerOption.answer} />
                    <label className="radio" htmlFor={`${currentQuestion.id}-${index}`}>{answerOption.answer}</label>
                </div>
            ))}
        </div>
    )
}

export default QuestionCard;
