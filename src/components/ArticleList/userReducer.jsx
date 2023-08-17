import React, { useReducer } from "react";

//estado inicial
const initialState = { count: 0}

//Reductor para manejar acciones
function reducer(state, action) {
    switch (action.type){
        case "increment":
            return { count: state.count + 1}
        case "decrement":
            return {count: state.count - 1}
        default:
            throw new Error() //sirve para cachar errores, encapsula error y evita que el programa muera
    }
}

function Counter() {
    //usar reducer para manejar estado mas "Complejo"
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>Contador: {state.count}</p>
            <button onClick={() => dispatch({type: "increment"})}>Incrementar</button>
            <button onClick={() => dispatch({type: "decrement"})}>Decrementar</button>
        </div>
    )
}

export default Counter