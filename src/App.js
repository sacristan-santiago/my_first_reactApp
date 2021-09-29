import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/NavBar';
import PaisListContainer from './components/PaisListContainer';
import ItemDetailCointainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <h1>Bienvendo a Swap!</h1>
            <PaisListContainer paises={["Argentina", "Chile", "Peru", "Bolivia", "Uruguay"]}/>
            <p>   
            En swap podrás intercambiar tu casa con la de otra persona en cualquier parte del mundo!
            </p>       
          </Route>
          <Route path="/categoria/:id">
            <h1>Bienvendo a Swap!</h1>
            <PaisListContainer paises={["Argentina", "Chile", "Peru", "Bolivia", "Uruguay"]}/>
            <p>   
            En swap podrás intercambiar tu casa con la de otra persona en cualquier parte del mundo!
            </p> 
          </Route>
          <Route path="/item/:id">
            <ItemDetailCointainer />
          </Route>
        </Switch>        
          

      </div>
    </BrowserRouter>
    
  );
}

export default App;
