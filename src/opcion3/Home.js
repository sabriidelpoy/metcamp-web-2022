import React from "react";
import { Button } from "./Button";
import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate();

    const onClickButton = () => {
       navigate('/game');
    } 
    return (
        <Button onClickHandler={onClickButton} text="Play" />
    )
}