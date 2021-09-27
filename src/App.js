import './App.css';
import Nav from './components/NavBar';
import PaisListContainer from './components/PaisListContainer';
import ItemDetailCointainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <h1>Bienvendo a Swap!</h1>
        <PaisListContainer paises={["Argentina", "Chile", "Peru", "Bolivia", "Uruguay"]}/>
        <p>   
          En swap podrás intercambiar tu casa con la de otra persona en cualquier parte del mundo!
        </p>
        <p>   
          Y como somos muy proactivos tambien vendemos algunos productos que podes llevarte de recuerdo de tus viajes!
        </p>
        <ItemDetailCointainer />
      </main>
    </div>
  );
}

export default App;
