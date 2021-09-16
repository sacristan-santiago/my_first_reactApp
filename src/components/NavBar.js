import CartWidget from './CartWidjet'

const Nav = () => {
    return (
        <nav className="header_nav">
            <h1>Swap</h1>
            <ul>
                <li>Inicio</li>
                <li>Swaps</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default Nav;