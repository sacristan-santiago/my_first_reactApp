import '../App.css';
import logo from "../logo.svg"

const Nav = () => {
    return (
        <nav className="header_nav">
            <h1>Swap</h1>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Swaps</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    )
}

export default Nav;