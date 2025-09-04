import React from "react";

function CardFilme({titulo, descricao, imagem}){

    return(
        <>
            <div>
                <img src={imagem} alt={titulo}/>
                <h2>{titulo}</h2>
                <p>{descricao}</p>
            </div>
        
        </>
    )
}

export default CardFilme;