import './index.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']


function Opcoes() {
    return  <ul className='header__opcoes'>
                { textoOpcoes.map( (texto) => <li className='opcao'>{ texto }</li>) }
            </ul>
}
    

export default Opcoes