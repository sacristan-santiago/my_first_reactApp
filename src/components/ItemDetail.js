import ItemCount from "./ItemCount.js"
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from "./CartContext.js";


const ItemDetail = (props) => {
    const {id, title, description, image, price, stock} = props.item

    const {addItem} = useContext(CartContext)
    
    const onAdd = (quantity) => {
        addItem(props.item, quantity)
    }

    return (
        <div className="card" style={{width: "20%", backgroundColor: "gray"}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p style={{height: "10vh", overflow: "hidden" }} className="card-text">{description}</p>
                <ItemCount stock={stock} initial ={1} onAdd={onAdd}/>
            </div>
            <button><NavLink to="/">Volver</NavLink></button>
        </div>
        
    )
}

export default ItemDetail;