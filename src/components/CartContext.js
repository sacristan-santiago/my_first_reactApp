import { createContext, useState } from "react";

export const CartContext = createContext()


export default function CartProvider ({defaultValue = [], children}) {
    const [cart, setCart] = useState(defaultValue);

    const removeItem = (ItemId) => {
        const newCart = cart.filter(x=>x.id != ItemId)
        
        setCart(newCart);
    }

    const clearCart = () => setCart([]);

    const isInCart = (ItemId) => {
        return cart.some(x=>x.id === ItemId);
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            cart.find(x=>x.id === item.id).quantity += quantity
            //La linea anterior efectivamente modifica cart, pero se llama setCart por prolijidad
            setCart(cart)
            console.log(`se modifico la cantidad del item: ${item.id}`)
            console.log("nuevo carrito: ", cart)
        } else {
            const newCartItem = item;
            item.quantity = quantity;
            setCart([...cart, newCartItem]);
            console.log("se actualizo el estado del carrito")
            console.log("nuevo carrito: ", cart)
        }
    }

    return <CartContext.Provider value={{cart, removeItem, clearCart, isInCart, addItem}}>
        {children}
    </CartContext.Provider>
}