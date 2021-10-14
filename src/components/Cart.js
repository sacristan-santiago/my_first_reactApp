import { useContext } from 'react';
import { CartContext } from './CartContext';
import { NavLink } from 'react-router-dom';


const Cart = () => {
    const {cart, removeItem} = useContext(CartContext)
    const showCart = () => {
        console.log(cart);
    }
    
    let precioTotal = 0 
    cart.forEach(item => {
          precioTotal += item.price*item.quantity
    });

    return (
        <div className="container">
            <h1>Carrito</h1>
            {(cart.length === 0) ? 
            <>
                <p>No hay productos en el carrito</p>
                <NavLink className="nav-link" to="/"><button type="button" className="btn btn-dark">Ver Productos</button></NavLink>
                
            </> : cart.map(item =>{
                        return (
                        <div>
                        <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Count</th>
                            <th scope="col">Price</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td><button onClick={()=>{removeItem(item.id)}}><span className="material-icons ">delete</span></button></td>
                            </tr>
                        </tbody>
                        </table>
                        <h1>Precio total: {precioTotal}</h1>
                        </div>
                        )})
            }

        <button onClick={showCart}>showcart</button>
        </div>
    )
}

export default Cart;