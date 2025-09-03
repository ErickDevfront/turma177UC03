import Tarefa from "../tarefa/Tarefa";
import styles from "./ListaTarefas.module.css";

function ListaTarefas({ tarefas, removerTarefa, editarTarefa }) {
  return tarefas.length ? (
    <ul className={styles.lista}>
      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          removerTarefa={removerTarefa}
          editarTarefa={editarTarefa}
        />
      ))}
    </ul>
  ) : (
    <p className={styles.vazio}>Nenhuma tarefa cadastrada.</p>
  );
}

export default ListaTarefas;
