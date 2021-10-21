import {useState} from "react";

const ItemCount = (props) => {
    const [contador, setContador] = useState(props.initial)
    
    return (
        <div>
            <div className="Item-count">
                <button className="btn btn-dark" onClick={()=>{if (contador>0) {setContador(contador - 1)}}}> - </button>
                <p> Contador: {contador} </p>
                <button className="btn btn-dark" onClick={()=>{if (contador<props.stock) {setContador(contador + 1)}}}> + </button>
            </div>
            <button className="btn btn-dark" onClick={()=>{if (contador<=props.stock) {props.onAdd(contador)}}}> Agregar al carrito </button>
        </div>
    )
}

export default ItemCount;