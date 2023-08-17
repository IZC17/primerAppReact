import './App.css'
import Layout from './components/Layout'
import ArticleList from './components/ArticleList/ArticleList'
import Reduce from "./components/ArticleList/userReducer" //*
import LifecycleExample from './components/ArticleList/lifecycleExample'

/*
  - Un componente es una función
  - Debes iniciar con mayus
  - Todo componente debe retornar algo
  - Siempre que necesitemos usar js en el jsx, debemos encerrarlo en {}

  -cuerpo de la función
  -lógica (opcional)
  -jsx


  customHooks -> solo tiene lógica aplicada a un componente
*/

function App() {

  const articles = [
    {title: "primer articulo", content: "Contenido del primer articulo"},
    {title: "Segundo articulo", content: "Contenido del segundo articulo"},
    {title: "Tercer articulo", content: "COntenido del tercer articulo"},
    {title: "Cuarto articulo", content: "COntenido del cuarto articulo"},
    {title: "Quinto articulo", content: "COntenido del quinto articulo"},
  ]

  return (
    <Layout>
      <section>
        <h3>Lorem ipsum dolor sit.</h3>
        <ArticleList articles={articles}/> 
        <Reduce />
        <LifecycleExample />
      </section>
    </Layout>
  )
}

export default App
