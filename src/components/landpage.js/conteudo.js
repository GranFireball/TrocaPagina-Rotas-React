import ContSingle from "./contSingle";

function Conteudo(){
    return(
        <div className='conteudo'>
            <div className='center'>               
                <ContSingle titulo="Nome" texto="Ziggs"/>
                <ContSingle titulo="Rota Principal" texto="Mid Lane"/>
                <ContSingle titulo="Status" texto="Poder de Habilidade"/>
                <ContSingle titulo="Função Principal" texto="Destruir Torres"/>          
            </div>
        </div>
    )
}

export default Conteudo;