import { fireEvent, render, screen } from '@testing-library/react';
import QuestionCard from '../index';

const props = {
    currentQuestion: {
        id: 8,
        question: "¿Quién mató a Dobby?",
        answers: [
            {
                id: 1,
                answer: "Lucius Malfoy",
                is_correct: false
            },
            {
                id: 2,
                answer: "Bellatrix Lestrange",
                is_correct: true
            },
            {
                id: 3,
                answer: "Fenrir Greyback",
                is_correct: false
            },
            {
                id: 4,
                answer: "Alecto Carrow",
                is_correct: false
            }
        ]
    },
    showCorrectAnswers: true,
    selectedAnswers: [],
    setSelectedAnswers: jest.fn(),
}

describe('QuestionCard component', () => {
    test('should render component', () => {
        render(<QuestionCard {...props} />);
        const optionToSelect = screen.getByRole('radio', { name: /lucius malfoy/i });
        fireEvent.click(optionToSelect);
        expect(props.setSelectedAnswers).toHaveBeenCalled();
        // expect(props.selectedAnswers.length).toBeGreaterThan(0);
    })
})