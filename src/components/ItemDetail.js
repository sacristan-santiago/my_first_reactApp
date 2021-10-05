import ItemCount from "./ItemCount.js"
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ItemDetail = (props) => {
    const {image, title, description} = props.item

    const onAdd = (quantity) => {
        console.log(`Agregar al cart el item:${title} con cantidad ${quantity} `)
    }

    return (
        <div className="card" style={{width: "20%", backgroundColor: "gray"}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p style={{height: "30vh", overflow: "hidden" }} className="card-text">{description}</p>
                <ItemCount stock={5} initial ={1} onAdd={onAdd}/>
            </div>
            <button><NavLink to="/">Volver</NavLink></button>
        </div>
        
    )
}

export default ItemDetail;