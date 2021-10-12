import CartWidget from './CartWidjet';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="header_nav">
            <h1><NavLink className="nav-link" to="/">SH/VA</NavLink></h1>
            <ul>
                <li><NavLink activeclassName="currentCategory" className="nav-link" to="/categoria/1">Crackers</NavLink></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default Nav;