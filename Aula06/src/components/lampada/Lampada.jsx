import { useState } from "react";
import on from "../../assets/on.png";
import off from "../../assets/off.png";
import styles from "./Lampada.module.css"

function Lampada() {
    const [lampada, setLampada] = useState(false);
    function alternarLampada() {
        setLampada(!lampada)
    }
    return (
        <>
            <div className={styles.container}>
                {/* <h2>Lâmpada {lampada ? "Ligada 💡": "Desligada 💤"}</h2> */}
                {
                    lampada ?
                        <img src={on} />
                        :
                        <img src={off} />
                }
                <button onClick={alternarLampada}>
                    {lampada ? "Desligar" : "Ligar"}
                </button>
            </div>
        </>
    )
}

export default Lampada;