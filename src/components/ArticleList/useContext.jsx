import React, { useContext } from "react";

//crear contexto
const userContext = React.createContext()

//Componente que consume el contexto
function UserInfo() {
    //Usar useContext para acceder al valor del contexto
    const user = useContext(userContext)
    return <p>Bienvenido, {user.name}</p>
}

//componente principal que proporciona el valor del contexto
function App() {
    const user = {name: "Irving"}

    return (
        <userContext.Provider value={user}>
            <UserInfo />
        </userContext.Provider> //.Provider lo da react context y permite suministrar valores 
        //a los componentes que estan consumiendo el contexto
    )
}
export default App
 