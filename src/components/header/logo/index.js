import styled from 'styled-components';
import logo from '../../../img/logo.svg';

const LogoContainer = styled.div`
  
.header__logo {
    display: flex;
    align-items: center;
}

p {
    font-size: 20px;
}

.logo__img {
    width: 45px;
    margin-right: 10px;
}
`

function Logo () {
    return (
        <LogoContainer>
          <div className='header__logo'>
            <img src={logo} alt='Imagem de logo' className='logo__img'></img>
            <p><strong>Alura</strong>books</p>
          </div>
        </LogoContainer>
    )
}

export default Logo;