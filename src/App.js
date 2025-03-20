
import Header from './components/header/header';
import Pesquisa from './components/pesquisa';
import UltimosLancamentos from './components/ultimos-laçamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
  ul {
    list-style: none;
  }

.App {
    height: 100vh;
    width: 100vw;
}

.App-header {
    display: flex;
    background-color: var(--branco);
    justify-content: space-between;
    padding: 0  20px  0  10px;
}
`

function App() {
  return (
    <AppContainer>
      <div className="App">
          <Header />
          <Pesquisa />
          <UltimosLancamentos />
      </div>
    </AppContainer>
  );
}

export default App;
