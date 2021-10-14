import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/NavBar';
import ProductosListContainer from './components/ProductListContainer';
import ItemDetailCointainer from './components/ItemDetailContainer';
import CategoriesListContainer from "./components/CategoriesListContainer"
import CartProvider from './components/CartContext';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
    <BrowserRouter >
      <div className="App">
        <Nav />
        <p className="text-center">Probá nuestros productos 100% plant based gluten free!</p>
        <Switch>
          <Route exact path="/">
            <CategoriesListContainer />
          </Route>

          <Route path="/categoria/:categoryId">
            <ProductosListContainer />
          </Route>

          <Route path="/item/:id">
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
