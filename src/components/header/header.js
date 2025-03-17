import Icones from "./icones";
import Opcoes from "./opcoes";
import Logo from "./logo";


function Header() {
    return (
        <header className='App-header'>
          <Logo />
          <Opcoes />
          <Icones />
        </header>
    )
}

export default Header