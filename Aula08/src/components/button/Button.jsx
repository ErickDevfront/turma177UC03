import React from "react";
import styles from "./Button.module.css";

function Button({label, onClick, type="default"}){
    return(
        <>
            <button className={`${styles.button} ${styles[type]}`} onClick={onClick} >
                {label}
            </button>
        </>
    )

}
export default Button;