import React from "react";
import styles from "./ProdutoCard.module.css";

function ProdutoCard({img, name, price, description, emPromocao}){
        return(
            <>
                <div className={styles.card}>
                    <img src={img} alt={name} />
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <h3>{price}</h3>
                    <p>{emPromocao && <span>🔥Promoção!</span>}</p>
                </div>
            </>
        )
}
export default ProdutoCard;