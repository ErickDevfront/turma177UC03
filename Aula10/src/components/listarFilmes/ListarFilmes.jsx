import CardFilme from "../cardFilme/cardFilme";
function ListarFilmes({filmes}){
    return filmes.length ? (
        <div>
            {
                filmes.map((filme) =>(
                    <CardFilme
                        key={filme.id}
                        titulo={filme.titulo}
                        descricao={filme.descricao}
                        imagem={filme.imagem}
                    />
                ))
            }
        </div>  
    ) : (
        <p> Nenhum filme cadastrado.</p>
    )
}
export default ListarFilmes;
