import React from "react";

export function Button({ text, onClickHandler }) {
    return (
        <button onClick={onClickHandler} className="button is-primary">
            { text }
        </button>
    )
}