import { useState } from "react";
import FormTarefa from "../../components/formTarefa/FormTarefa";
import ListaTarefas from "../../components/listaTarefas/ListaTarefas";
import styles from "./TarefasPage.module.css";

function TarefasPage(){
    const[tarefas, setTarefas] = useState([]);
    const[tarefaEdicao, setTarefaEdicao] = useState(null);

    function adicionarTarefa(nova){
        setTarefas([...tarefas, nova]);
    }
    function removerTarefa(id){
        setTarefas(tarefas.filter((t) => t.id !== id));
    }
    function editarTarefa(tarefa){
        setTarefaEdicao(tarefa);
    }
    function atualizarTarefa(tarefaAtualizada){
        setTarefas(
            tarefas.map((t) => (t.id === tarefaAtualizada.id ? tarefaAtualizada : t) )
        );
        setTarefaEdicao(null);
    }
    return (
        <>
            <div className={styles.container}>
                <FormTarefa
                    adicionarTarefa={adicionarTarefa}
                    tarefaEdicao={tarefaEdicao}
                    atualizarTarefa={atualizarTarefa}
                />
                <ListaTarefas 
                    tarefas={tarefas}
                    removerTarefa={removerTarefa}
                    editarTarefa={editarTarefa}
                />
            </div>

        </>
    )
}

export default TarefasPage;