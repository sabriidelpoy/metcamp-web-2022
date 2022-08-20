import { useState, useEffect, useContext } from "react";
import Container from "../../components/Container";
import ThemeContext from "../../context/ThemeContext";
import ReactSwitch from "react-switch";


function Game() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="container" id={theme} >
                <Container />
                <div className="switch">
                    <label>{theme === 'light' ? 'Dark mode': 'Light mode'}</label>
                    <ReactSwitch onChange={toggleTheme} checked={theme ==='dark'} />
                </div>

            </div>
        </ThemeContext.Provider>
    )
}

export default Game;