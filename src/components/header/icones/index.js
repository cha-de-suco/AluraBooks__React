import perfil from '../../../img/perfil.svg'
import sacola from '../../../img/sacola.svg'
import styled from 'styled-components'

const IconesContainer = styled.ul `
    .header__icone {
    align-items: center;
    display: flex;
    gap: 30px;
  }
  
  .icone {
    width: 32px;
  }
`

const icones = [perfil, sacola]

function Icones() {
    return (
        <IconesContainer>
            <ul className='header__icone'>
                { icones.map( (icone) => <li><img src={icone}  className='icone'></img></li> ) }
            </ul>
        </IconesContainer>

    )
}

export default Icones