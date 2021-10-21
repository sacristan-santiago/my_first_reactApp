import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { NavLink } from 'react-router-dom';
import CartConfirmation from './CartConfirmation';
import { app } from '../firebase';
import { getFirestore, collection, addDoc, Timestamp} from 'firebase/firestore';


const Cart = () => {
    const {cart, removeItem} = useContext(CartContext)
    const [name, setName] = useState ("");
    const [surename, setSurename] = useState ("");
    const [email, setEmail] = useState ("");
    const [phone, setPhone] = useState (0);
    const [orderId, setOrderId] = useState(null)

    let precioTotal = 0 
    cart.forEach(item => {
          precioTotal += item.price*item.quantity
    });

    const handleChange = (e) => {
        const name = e.target.name

        switch (name) {
            case "name":
                setName(e.target.value)
                break;
            case "surename":
                setSurename(e.target.value)
                break;
            case "email":
                setEmail(e.target.value)
                break;
            case "phone":
                setPhone(e.target.value)
                break;
            default:
                console.log("error de input")
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const db = getFirestore(app);
            const docRef = await addDoc(collection(db, "orders"), {
                buyer: {
                    name: name,
                    surename: surename,
                    phone: phone,
                    email: email
                },
                items: cart,
                date: Timestamp.now(),
                total: precioTotal
              });
            console.log("Document written with ID: ", docRef.id);
            setOrderId(docRef.id)

        } catch (err) {
            console.log("Error emitting order", err)
        }

    }

    return (
        <div className="container">
            <div>
                <h1>Carrito</h1>
                {(cart.length === 0) ?
                <>
                    <p>No hay productos en el carrito</p>
                    <NavLink className="nav-link" to="/"><button type="button" className="btn btn-dark">Ver Productos</button></NavLink>
                
                </> : cart.map(item =>{
                            return (
                            <div>
                            <table className="table table-hover cart-table">
                            <thead>
                                <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Count</th>
                                <th scope="col">Price</th>
                                <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td><button onClick={()=>{removeItem(item.id)}}><span className="material-icons">delete</span></button></td>
                                </tr>
                            </tbody>
                            </table>
                            </div>
                            )})
                }
                <h4>Precio total: {precioTotal}</h4>
            </div>
        
            <div className="comprar">
                <h2>Comprar</h2>
                <p>Completa los siguientes datos y confirma tu compra   !</p>
                <form className="cart-form" onSubmit={handleSubmit}>
                    <label name="name" >Nombre:</label>
                    <input type="text" name="name" id="name" onChange={handleChange} required></input>
                    <label name="apellido" >Apellido:</label>
                    <input type="text" name="surename" id="surename" onChange={handleChange} required></input>
                    <label name="email" >Email:</label>
                    <input type="email" name="email" id="email" onChange={handleChange} required></input>
                    <label name="phone" >Teléfono:</label>
                    <input type="number" name="phone" id="phone" onChange={handleChange}  required></input>
                    <input type="submit" className="btn btn-dark" value="Confirmar Orden"></input>
                </form>
                {(orderId) ? <CartConfirmation orderId={orderId}/> : "" }
            </div>
        </div>
    )
}

export default Cart;