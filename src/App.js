import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/NavBar';
import ProductosListContainer from './components/ProductListContainer';
import ItemDetailCointainer from './components/ItemDetailContainer';
import CartProvider from './components/CartContext';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
    <BrowserRouter >
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <p className="text-center">Probá nuestras Crackers 100% plant based gluten free:</p>
            <ProductosListContainer productos={["Pimenton", "Carbon", "Mediterraneas", "Semillas"]}/>
          </Route>
          
          <Route path="/categoria/:id">
            <p className="text-center">Nuestras crackers son 100% plant based y gluten free, probalas!</p> 
            <ProductosListContainer productos={["Pimenton", "Carbon", "Mediterraneas", "Semillas"]}/>
          </Route>

          <Route path="/item/:name">
            <ItemDetailCointainer />   
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
            
        </Switch>              
      </div>
    </BrowserRouter>
    </CartProvider> 
  );
}

export default App;
