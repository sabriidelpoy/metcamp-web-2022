import { render, screen, fireEvent } from "@testing-library/react";

import Button from '../index';

const props = {
    text: 'MetCamp Quiz test',
    classes: 'is-primary is-outlined is-large',
    onClick: jest.fn(),
}

describe('Button Component', () => {
    test('should match snapshot', () => {
        const { container } = render(<Button {...props} />);
        expect(container).toMatchSnapshot();
    });

    test('should ejecute onClick function', () => {
        // 1. Inicialización
        render(<Button {...props} />);
        // 2. Estímulo
        const buttonHome = screen.getByRole('button', {
            name: /metcamp quiz test/i
          })
        // const buttonHome = screen.getByText('MetCamp Quiz test');
        fireEvent.click(buttonHome);
        // 3. Observar el comportamiento esperado
        expect(props.onClick).toHaveBeenCalled();
    });

});