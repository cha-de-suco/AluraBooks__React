import './App.css';
import Logo from './components/header/logo/index.js'
import Opcoes from './components/header/opcoes/index.js';
import Icones from './components/header/icones/index.js';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo />
        <Opcoes />
        <Icones />
      </header>
    </div>
  );
}

export default App;
