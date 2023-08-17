import React, { useEffect, useState } from "react";

function LifecycleExample() {
    const [count, setCount] = useState(0)

useEffect( () => {
    console.log("componente montado o actualizado")

    //Limpiar funcion; se ejecutara antes de la siguiente actualizacion o desmontaje

    return () => {
        console.log ("componente desmontado")
    }
})
    //funion para manejar el incremento del contador
    const handleIncrement = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p>Contador 234: {count}</p>
            <button onClick={handleIncrement}>Incrementar</button>
        </div>
    )
}

export default LifecycleExample