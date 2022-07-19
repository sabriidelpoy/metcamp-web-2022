import './styles.css';

function Button({ text, onClick, classes }) {
    return (
        <button onClick={onClick} className={`button ${classes}`}>
            { text }
        </button>
    )
}

export default Button;
