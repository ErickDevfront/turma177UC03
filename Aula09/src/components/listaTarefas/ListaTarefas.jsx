import Tarefa from "../tarefa/Tarefa";

function ListaTarefas({tarefas, removerTarefa, editarTarefa}) {
    return (
    <>
    <ul>
        {
            tarefas.map((t) =>(
              <Tarefa 
                key={t.id}
                tarefa={t}
                removerTarefa={removerTarefa}
                editarTarefa={editarTarefa}
               />              
            ))
        }
    </ul>
    </>
)
}

export default ListaTarefas