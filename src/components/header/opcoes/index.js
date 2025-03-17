import styled from "styled-components"


const OpcoesContainer = styled.ul`
.header__opcoes {
    text-align:center;
    align-itens:center;
    display: flex;
    justify-content:center;
    padding-right: 15px;
    margin: none;
  }
  
.opcao {
    margin-top: 9px;
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    height: 100%;
    justify-content: center;
    min-width: 120px;
}
  
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function Opcoes() {
    return (
        <OpcoesContainer>
            <ul className='header__opcoes'>
                { textoOpcoes.map( (texto) => <li className='opcao'>{ texto }</li>) }
            </ul>
        </OpcoesContainer>
    )  
}
    

export default Opcoes