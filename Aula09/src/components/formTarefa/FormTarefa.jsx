import { useState, useEffect } from "react";

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
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite a tarefa"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                />
                <button type="submit">
                    {tarefaEdicao ?  "Atualizar Tarefa" : "Cadastrar"}
                </button>

            </form>
        </>
    )
}
export default FormTarefa;