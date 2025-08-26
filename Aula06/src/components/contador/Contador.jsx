import { useState } from "react";
import styles from "./Contador.module.css";

function Contador(){
    const [contador, setContador] = useState(0)
    return(
        <>
        <div className={styles.container}>
            <h2>Contador: {contador} </h2>
            <button onClick={() => setContador(contador + 1)}> ➕ Aumentar  </button>
            <button onClick={() => setContador(contador > 0 ? contador - 1 : 0)}> ➖ Diminuir  </button>
            <button onClick={() => setContador(0)}> 🔃 Resetar  </button>
        </div>
        </>
    )
}
export default Contador;

