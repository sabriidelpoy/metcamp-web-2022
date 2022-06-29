import React from "react";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <button>
            <Link to='/game'>Play game</Link>
        </button>
    )
}