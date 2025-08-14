import React from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import styles from "./Home.module.css";

function Home(){
    return (
        <>
            <div className={styles.container}>
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}

export default Home;