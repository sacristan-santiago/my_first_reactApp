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

    const addItem = async (item, quantity) => {
        if (isInCart(item.id)) {
            console.log("Item already exists in cart")
            console.log("carrito :" , cart )
        } else {
            const newCartItem = item;
            item.quantity = quantity;
            await setCart([...cart, newCartItem]);
            console.log("se actualizo el estado del carrito")
            console.log("nuevo carrito: ", cart)
        }
    }

    return <CartContext.Provider value={{cart, removeItem, clearCart, isInCart, addItem}}>
        {children}
    </CartContext.Provider>
}