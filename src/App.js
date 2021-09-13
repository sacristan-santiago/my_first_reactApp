import logo from './logo.svg';
import './App.css';
import Nav from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <h1>Bienvendo a Swap!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          En swap podrás intercambiar tu casa con la de otra persona en cualquier parte del mundo!
        </p>
      </main>
    </div>
  );
}

export default App;
