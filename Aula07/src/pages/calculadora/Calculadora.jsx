import { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import styles from "./Calculadora.module.css";

function Calculadora() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [resultado, setResultado] = useState("");

    function calcular(op) {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if (isNaN(n1) || isNaN(n2)) {
            setResultado("Digite valores válidos!");
            return;
        }
        switch (op) {
            case "+":
                setResultado(n1 + n2);
                break;
            case "-":
                setResultado(n1 - n2);
                break;
            case "*":
                setResultado(n1 * n2);
                break;
            case "-":
                setResultado(n1 - n2);
                break;
            case "/":
                setResultado(n2===0 ? "Erro: Divisão por zero" : n1/n2);
                break;
            default:
                setResultado(null);

        }
    }

    return (
        <>
            <div className={styles.container}>
                <h1>Calculadora do JS</h1>
                <Input
                    label="Número 01"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Número 01"
                />
                <Input
                    label="Número 02"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Número 02"
                />
                <div className={styles.buttons}>
                    <Button label="➕" onClick={()=>calcular("+")} />
                    <Button label="➖" onClick={()=>calcular("-")} />
                    <Button label="✖️" onClick={()=>calcular("*")} type="sucess" />
                    <Button label="➗" onClick={()=>calcular("/")} type="danger" />
                </div>
                <p className={styles.resultado}>Resultado: {resultado}</p>

            </div>


        </>
    )
}

export default Calculadora;
