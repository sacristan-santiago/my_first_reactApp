import Producto from "./Product"

const ProductosList = (props) => {
    const productos = props.productos
    
    return (
        <>
            {productos.map(x => {
                return <Producto key={x.title} producto={x}/>
            })}
        </>
    )
}

export default ProductosList;