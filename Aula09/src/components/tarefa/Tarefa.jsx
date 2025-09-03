import React from "react";
import styles from "./Tarefa.module.css";

function Tarefa({ tarefa, removerTarefa, editarTarefa }) {
    return (
        <>
            <li className={styles.item}>
                <span className={styles.texto}>{tarefa.texto}</span>
                <div className={styles.acoes}>
                    <button
                        onClick={() => editarTarefa(tarefa)}
                        className={`${styles.botao} ${styles.editar}`}
                    >
                        📝 Editar
                    </button>
                    <button
                        onClick={() => removerTarefa(tarefa.id)}
                        className={`${styles.botao} ${styles.remover}`}
                    >
                        🗑️ Remover
                    </button>
                </div>

            </li>
        </>
    )
}
export default Tarefa;
