import { useState } from "react";

function FormFilme({adicionarFilme}){
    const[titulo, setTitulo] = useState("");
    const[descricao, setDescricao] = useState("");
    const[imagem, setImagem] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        if(!titulo || !descricao || !imagem){
            return;
        }else{
            adicionarFilme({id: Date.now(), titulo, descricao, imagem});
        }
        setTitulo("");
        setDescricao("");
        setImagem("");
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Titulo:</label>
                <input
                    type="text"
                    placeholder="Digite o titulo do Filme"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                 <label>Imagem:</label>
                <input
                    type="url"
                    placeholder="Digite a URL da imagem"
                    value={imagem}
                    onChange={(e) => setImagem(e.target.value)}
                />
                 <label>Descrição:</label>
                <input
                    type="text"
                    placeholder="Digite a descrição do filme"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )

}
export default FormFilme;