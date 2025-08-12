import React from "react";
import styles from "./Main.module.css";
import Card from "../Card/Card";

function Main() {
    return (
        <>
            <main className={styles.main}>
                <Card
                    titulo="Ubuntu"
                    conteudo="Ubuntu é uma das distribuições Linux mais populares do mundo, desenvolvida pela empresa britânica Canonical. Ele é gratuito, de código aberto e voltado para facilidade de uso, estabilidade e segurança."
                    img="https://th.bing.com/th/id/R.b0f82d5bb7f1b8543127a2a192532b5e?rik=UiOMkfpbcj8Nhw&riu=http%3a%2f%2f3.bp.blogspot.com%2f_mAEoznxCFIc%2fTQPaGlVSshI%2fAAAAAAAAALw%2foa4EzkioZTo%2fs1600%2fUbuntulogomarketing1280x1024nobackground.png&ehk=F9uMfSWdc5xNrM3aEldds%2bnDU5f3rQup5auWiEKVFjI%3d&risl=&pid=ImgRaw&r=0"
                />
                <Card
                    titulo="Red-hat"
                    conteudo="Red Hat é uma empresa norte-americana especializada em soluções de software open source para ambientes corporativos. Fundada em 1993, ela se tornou referência mundial em tecnologias baseadas em Linux, nuvem híbrida, containers e automação."
                    img="https://events.redhat.com/accounts/register123/redhat/readhat2/Logo-RedHat-BlackText-Large.png"

                />
                <Card
                    titulo="ArchLinux"
                    conteudo="Arch Linux é uma distribuição Linux leve, flexível e voltada para usuários avançados que desejam controle total sobre seu sistema. Criado em 2002 por Judd Vinet, o Arch segue a filosofia KISS ('Keep It Simple, Stupid'), priorizando simplicidade no design e transparência no funcionamento"
                    img="https://2.bp.blogspot.com/-1tdO7rA_KTg/Vhqgxy_Z1AI/AAAAAAAAA8I/oQcqAf8gP-w/s1600/arch_linux.png"


                />

            </main>
        </>
    )
}
export default Main;