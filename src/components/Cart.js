import React, {useContext} from 'react';
import { CartContext } from './CartContext';


const Cart = () => {
    const {cart, removeItem} = useContext(CartContext)
    const showCart = () => {
        console.log(cart);
    }

    
    return (
        <div>
            <h1>Carrito</h1>
            { (cart.length === 0 ) ? <>No hay productos en el carrito</> : cart.map(item=>{
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
                        </div>
                            )})
            }
        </div>
    )
}

export default Cart;