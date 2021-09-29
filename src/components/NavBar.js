import CartWidget from './CartWidjet';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="header_nav">
            <h1>Swap</h1>
            <ul>
                <li><NavLink activeclassName="currentCategory" className="nav-link" to="/categoria/1">Categoria 1</NavLink></li>
                <li><NavLink activeclassName="currentCategory" className="nav-link" to="/categoria/2">Categoria 2</NavLink></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default Nav;