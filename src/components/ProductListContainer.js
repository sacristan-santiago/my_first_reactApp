import { useEffect, useState } from 'react';
import ProductosList from './ProductsList';

const ProductosListContainer = (props) => {
    const [productos, setProductos] = useState ([])

    useEffect(()=>{
        const mockAsync = new Promise ((res)=> {
            setTimeout(()=> {
                res(props.productos)
            }, 500)
        })

        mockAsync.then((resultado)=> {
            setProductos(resultado)
        })
    }, [])

    if (productos.length<=0) {
        return (
            <>Cargando...</>
        )
    } else {
        return (
            <div className="Productos-list">
                <ProductosList productos={productos}/>
            </div>
        )
    }
}

export default ProductosListContainer;