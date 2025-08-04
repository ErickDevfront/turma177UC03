import React from "react";
import Saudacao from "../../components/saudacao/Saudacao";
import styles from "./Home.module.css"

function Home(){
    return(
        <div className={styles.container}>
              <Saudacao />
        </div>
      
    )
}

export default Home;