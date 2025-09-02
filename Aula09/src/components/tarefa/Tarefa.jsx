import React from "react";

function Tarefa({tarefa, removerTarefa, editarTarefa}){
    return(
        <>
            <li>
                {tarefa.texto}
                <button onClick={() => editarTarefa(tarefa)}>
                    📝 Editar
                </button>
                <button onClick={() => removerTarefa(tarefa.id)}>
                    🗑️ Remover
                </button>
            </li>
        </>
    )
}
export default Tarefa;
