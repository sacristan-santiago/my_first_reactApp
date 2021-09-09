import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvendo a mi sitio web!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi nombre es Santiago y a continuacion encontrarás un link a mi repositorio de GitHub:
        </p>
        <a
          className="App-link"
          href="https://github.com/sacristan-santiago"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi Repositorio
        </a>
        <p>
          Y también links a mi proyectos previos!!!
        </p>
        <a
          className="App-link"
          href="https://sacristan-santiago.github.io/javascript_interactuando_DOM/"
          target="_blank"
          rel="noopener noreferrer"
        >Mi caja registradora</a>
        <a
          className="App-link"
          href="https://sacristan-santiago.github.io/Consultorio-Neurologia/"
          target="_blank"
          rel="noopener noreferrer"
        >Consultorio de Neurologia</a>
      </header>
    </div>
  );
}

export default App;
