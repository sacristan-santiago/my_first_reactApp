import { NavLink } from 'react-router-dom';


const CartWidget = () => {
    return (
        <NavLink className="nav-link shopping-cart" to="/cart"><span className="material-icons shopping-cart">shopping_cart</span></NavLink>   
    )
}

export default CartWidget;