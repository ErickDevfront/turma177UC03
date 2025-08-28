import React from "react";
import styles from "./Input.module.css";

function Input({ label, value, onChange, placeholder }) {
    return (
        <>
        <div className={styles.container}>
            <label>{label}</label>
             <input
                className={styles.input}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
           
        </>
    )
}
export default Input;