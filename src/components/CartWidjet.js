import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const {cart} = useContext(CartContext)
    const cartCounter = cart.length;

    if (cartCounter != 0 ) {
        return (
            <NavLink className="nav-link shopping-cart" to="/cart"><span>{cartCounter}</span><span className="material-icons shopping-cart">shopping_cart</span></NavLink>   
        )
    } else {
        return <></>
    }
}

export default CartWidget;