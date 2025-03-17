import './style.css'
import logo from '../../../img/logo.svg';

function Logo () {
    return (
        <div className='header__logo'>
          <img src={logo} alt='Imagem de logo' className='logo__img'></img>
          <p><strong>Alura</strong>books</p>
        </div>
    )
}

export default Logo;