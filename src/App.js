import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/NavBar';
import ProductosListContainer from './components/ProductListContainer';
import ItemDetailCointainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <p>Probá nuestras Crackers 100% plant based gluten free:</p>
            <ProductosListContainer productos={["Pimenton", "Carbon", "Mediterraneas", "Semillas"]}/>
          </Route>
          <Route path="/categoria/:id">
            <p>   
            Nuestras crackers son 100% plant based y gluten free, probalas!
            </p> 
            <ProductosListContainer productos={["Pimenton", "Carbon", "Mediterraneas", "Semillas"]}/>
          </Route>
          <Route path="/item/:id">
            <ItemDetailCointainer />
          </Route>
          <Route path="/cart">
            
          </Route>

        </Switch>              
      </div>
    </BrowserRouter>
    
  );
}

export default App;
