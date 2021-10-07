import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail.js';

const ItemDetailCointainer = () => {
    const [items, setItems] = useState ([])
    const {id} = useParams();
    
    const mockItem = {
        id: 1, 
        title: "Pimenton",
        description: "Crackers a base de harina de arroz y pimenton",
        image: "/pimenton.jpg"
    }

    useEffect(()=>{
        //este fetch deberia traer de la API el producto con :id=id
        // fetch('https://fakestoreapi.com/products/')
        //     .then(res=>res.json())
        //     .then(data=>setItems(data))
        setItems([mockItem]);
    }, [])

    if (items.length<=0) {
        return (
            <>Cargando...</>
        )
    } else {
        return (
            <div className="Items-gallery">
                <ItemDetail item={items[0]}/>
            </div>
        )
    }
}

export default ItemDetailCointainer;