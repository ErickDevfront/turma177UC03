import React from "react";
import styles from "./Card.module.css";

function Card({titulo, conteudo, img}) {
    return (
        <>
            <div className={styles.container}>
            
                    <h1>{titulo}</h1>
                    <p>{conteudo}</p>
                    <img src={img}></img>
               
            </div>
        </>
    )
}

export default Card;