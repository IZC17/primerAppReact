import React from "react";
import { useState } from "react";

function ButtonClickExample() {
    const [message, setMessage] = useState("")

    const click = () => {
        setMessage ("Botón presionado")
    }

    return (
        <div>
            <button onClick={handleClick}>Hacer click</button>
            <p>{message}</p>
        </div>
    )
}

