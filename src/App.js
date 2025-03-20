
import Header from './components/header/header';
import Pesquisa from './components/pesquisa';
import UltimosLancamentos from './components/ultimos-laçamentos';
import './App.css'


function App() {
  return (
    <div className="App">
        <Header />
        <Pesquisa />
        <UltimosLancamentos />
    </div>
  );
}

export default App;
