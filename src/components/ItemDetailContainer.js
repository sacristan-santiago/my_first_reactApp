import { useEffect, useState } from 'react';
import ItemDetailList from './ItemDetailList.js';

const ItemDetailCointainer = (props) => {
    const [items, setItems] = useState ([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(data=>setItems(data))
    }, [])

    console.log(items);
    
    return (
        <div className="Items-list">
            <ItemDetailList items={items}/>
        </div>
    )
}

export default ItemDetailCointainer;