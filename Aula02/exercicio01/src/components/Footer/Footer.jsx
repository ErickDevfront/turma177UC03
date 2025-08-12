import React from "react";
import styles from "./Footer.module.css";

function Footer(){
    return(
        <>
            <footer className={styles.footer}> 
                <p>Meu primeiro site React. Todos os direitos reservados {new Date().getFullYear()} &copy;</p>
            </footer>
        </>
    )
}

export default  Footer;