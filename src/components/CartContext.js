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
            const itemToUpdate = cart.find(x=>x.id === item.id);
            const newQuantity = itemToUpdate.quantity + quantity;
            itemToUpdate.quantity = newQuantity;
            console.log(cart)
            const newCart = cart
            newCart.splice(newCart.findIndex(x=>x.id===item.id), 1, itemToUpdate);
            console.log(newCart)
            
            console.log("se actualizo cantidad del elemento", item.id)
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