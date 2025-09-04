import { useState, useEffect } from "react";
import FormFilme from "../../components/formFilme/formFilme";
import ListarFilmes from "../../components/listarFilmes/ListarFilmes";

function Catalago() {
    const [filmes, setFilmes] = useState([]);
    const [mensagem, setMensagem] = useState("");
    const [ultimoFilme, setUltimoFilme] = useState("");

    useEffect(()=>{
        if(filmes.length > 0){
            setMensagem("🎉 Filme cadastrado com sucesso.")
            setUltimoFilme(filmes[filmes.length-1].titulo);

            const timer = setTimeout(()=> setMensagem(""), 3000);
            return () => clearTimeout(timer);

        }
    },[filmes])

    function adicionarFilme(filme) {
        setFilmes([...filmes, filme]);
    }
    return (
        <>
            <div>
                <h1>📽️ Filmes </h1>
                <FormFilme adicionarFilme={adicionarFilme} />
                {mensagem && <p> {mensagem} </p>}
                <p>Total de filmes cadastrados: {filmes.length}</p>
                {ultimoFilme && <p>Último Filme cadastrado: {ultimoFilme}</p>}
                <ListarFilmes filmes={filmes} />
            </div>
        </>


    )
}
export default Catalago;