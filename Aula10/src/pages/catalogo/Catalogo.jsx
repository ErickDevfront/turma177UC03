import { useState, useEffect} from "react";
import FormFilme from "../../components/formFilme/formFilme";
import ListarFilmes from "../../components/listarFilmes/ListarFilmes";

function Catalago(){
    const[filmes, setFilmes] = useState([]);
    const[mensagem, setMensagem] = useState("");
    const[ultimoFilme, setUltimoFilme] = useState("");

    function adicionarFilme(filme){
        setFilmes([...filmes, filme]);
    }
    return(
        <>
            <div>
                <h1>📽️ Filmes </h1>
                <FormFilme adicionarFilme={adicionarFilme} />
                <ListarFilmes filmes={filmes} />
            </div>
        </>


    )
}
export default Catalago;