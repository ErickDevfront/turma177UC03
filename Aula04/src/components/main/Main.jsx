import React from "react";
import produtos from "../../data/produtos";
import ProdutoCard from "../produtoCard/ProdutoCard";
import styles from "./Main.module.css";

function Main() {
    return (
        <>
            <main className={styles.main}>
                {
                    produtos.map((produto) => (
                        <ProdutoCard
                            key={produto.id}
                            img={produto.img}
                            name={produto.name}
                            price={produto.price}
                            description={produto.description}
                            emPromocao={produto.emPromocao}
                        />
                    ))
                }
            </main>
        </>
    )
}

export default Main;