import Producto from "./Product"

const ProductosList = (props) => {
    const productos = props.productos
    
    return (
        <ul>
            {productos.map(x=><Producto producto={x}/>)}
        </ul>
        
    )
}

export default ProductosList;