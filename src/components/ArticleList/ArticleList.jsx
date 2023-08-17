import React, { useState } from "react";
import styles from "./ArticleList.module.css"

function ArticleList({articles}) {
//el hook permite useState tener un estado local almacenado   
    const [count, setCount] = useState(0)
    
    return(
        <>
        <ul className={styles.ArticleList}>
            {articles.map((article, index) => (
            <li key={index} className={styles.articleItem}>
                <h4>{article.title}</h4>
                <p>{article.content}</p>
                <p>{index}</p>
            </li> ))}
        </ul>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </>
    )
}

export default ArticleList