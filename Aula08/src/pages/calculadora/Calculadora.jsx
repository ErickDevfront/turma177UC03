import { useState } from "react";
import Button from "../../components/button/Button";
import styles from "./Calculadora.module.css";

function Calculadora() {

    const [resultado, setResultado] = useState(" ");

    function visor(tecla) {
        setResultado(prev => prev + tecla);
    }

    function calcular() {
        let resultadoFinal = eval(resultado.replace("x", "*").replace("÷", "/"));
        setResultado(resultadoFinal);
    }

    function limpar() {
        setResultado("");
    }

    function apagar() {
        setResultado(resultado.substring(0, resultado.length - 1))
    }

    return (
        <>
            <div className={styles.container}>
                <h1>Calculadora do JS</h1>
                <div className={styles.visor}>
                    <p className={styles.resultado}>{resultado}</p>
                </div>
                <div className={styles.buttons}>
                    <Button label="C" onClick={() => limpar("c")} />
                    <Button label="🔙" onClick={() => apagar("l")} />
                    <Button label="✖️" onClick={() => visor("x")} type="sucess" />
                    <Button label="➗" onClick={() => visor("÷")} type="danger" />


                    <Button label="7️⃣" onClick={() => visor("7")} />
                    <Button label="8️⃣" onClick={() => visor("8")} />
                    <Button label="9️⃣" onClick={() => visor("9")} />
                    <Button label="➖" onClick={() => visor("-")} />

                    <Button label="4️⃣" onClick={() => visor("4")} />
                    <Button label="5️⃣" onClick={() => visor("5")} />
                    <Button label="6️⃣" onClick={() => visor("6")} />
                    <Button label="➕" onClick={() => visor("+")} />

                    <Button label="1️⃣" onClick={() => visor("1")} />
                    <Button label="2️⃣" onClick={() => visor("2")} />
                    <Button label="3️⃣" onClick={() => visor("3")} />

                    {/* "=" ocupa 2 linhas */}
                    <div className={styles.span2row}>
                        <Button label="🟰" onClick={() => calcular("=")} type="danger" />
                    </div>

                    {/* "0" ocupa 2 colunas */}
                    <div className={styles.span2col}>
                        <Button label="0️⃣" onClick={() => visor("0")} />
                    </div>

                    <Button label="." onClick={() => visor(".")} type="danger" />
             

                </div>
            </div>


        </>
    )
}

export default Calculadora;
