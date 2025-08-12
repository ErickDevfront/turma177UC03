import React from "react";
import styles from "./Header.module.css";

function Header(){
    return(
        <>
            <header className={styles.header}> 
              <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About </a></li>
                    <li><a href="/">Contact </a></li>
                </ul>
              </nav>
            </header>
        </>
    )
}

export default  Header;