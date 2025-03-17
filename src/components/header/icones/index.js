import './style.css'
import perfil from '../../../img/perfil.svg'
import sacola from '../../../img/sacola.svg'


const icones = [perfil, sacola]

function Icones() {
    return <ul className='header__icone'>
                { icones.map( (icone) => <li><img src={icone}  className='icone'></img></li> ) }
           </ul>
}

export default Icones