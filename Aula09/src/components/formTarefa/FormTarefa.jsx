import { useState, useEffect } from "react";
import styles from  "./FormTarefa.module.css"

function FormTarefa({ adicionarTarefa, tarefaEdicao, atualizarTarefa }) {
    const [texto, setTexto] = useState("");

    useEffect(() => {
        if (tarefaEdicao) {
            setTexto(tarefaEdicao.texto);
        }

    }, [tarefaEdicao]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!texto) {
            return
        }
        if (tarefaEdicao) {
            atualizarTarefa({ ...tarefaEdicao, texto });
        } else {
            adicionarTarefa({ id: Date.now(), texto });
        }
        setTexto("");
    }
    return (
        <>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <input
                    type="text"
                    placeholder="Digite a tarefa"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    {tarefaEdicao ?  "Atualizar Tarefa" : "Cadastrar"}
                </button>

            </form>
        </>
    )
}
export default FormTarefa;