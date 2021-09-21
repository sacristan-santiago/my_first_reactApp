import logo from './logo.svg';
import './App.css';
import Nav from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <h1>Bienvendo a Swap!</h1>
        <ItemListContainer paises={["Argentina", "Uruguay", "Chile"]}/>
        <p>   
          En swap podrás intercambiar tu casa con la de otra persona en cualquier parte del mundo!
        </p>
        <ItemCount stock={5} initial ={1} onAdd={()=>{console.log("Se agrego el item al carrito")}}/>
      </main>
    </div>
  );
}

export default App;
