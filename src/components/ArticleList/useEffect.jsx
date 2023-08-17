
import React, { useState, useEffect} from "react";

function DataFetching() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("api") //Aqui se ingresa el link de la api
        .then(response => response.json())
        .then(data => setData(data))
    }, []) //se pasa un arreglo vacio para que solo se ejecute una vez, de lo contrario, se puede ejecutar
    //en cada actualizacion ocasionando problemas de rendimientos

    return(
        <div>
            <h2>Lista de datos</h2>
            <ul>
                {data.map(item => (
                    <li>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

//useEffect permite manejar un efecto secundario, es como una accion que ocurre fuera del flujo normal
//en cuanto se esta renderizando el componente, se ejecuta despues del render y en cada
//actualizacion del componente, es como yT que al cargar muestra recuadros grises o negros
//y despues tarda segundos en mostrar la data real, eso podria ser un use effect