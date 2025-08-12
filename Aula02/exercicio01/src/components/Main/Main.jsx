import React from "react";
import styles from "./Main.module.css";
import Card from "../Card/Card";

function Main() {
    return (
        <>
            <main className={styles.main}>
                <Card />
                <Card />
                <Card />

            </main>
        </>
    )
}
export default Main;