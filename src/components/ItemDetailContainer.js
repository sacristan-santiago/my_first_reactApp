import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail.js';

const ItemDetailCointainer = () => {
    const [items, setItems] = useState ([])
    const {name} = useParams();
    
    const mockItems  = [
        {
            id: 1, 
            title: "Pimenton",
            description: "Crackers a base de harina de arroz sabor pimenton",
            price: 200.00,
            stock: 10,
            image: "/pimenton.jpg"
        },
        {
            id: 2, 
            title: "Mediterraneas",
            description: "Crackers a base de harina de arroz sabor mediterráneo",
            price: 200.00,
            stock: 10,
            image: "/mediterraneas.jpg"
        },
        {
            id: 3, 
            title: "Carbon",
            description: "Crackers a base de harina de arroz sabor carbon ahumado",
            price: 200.00,
            stock: 10,
            image: "/carbon.jpg"
        },
        {
            id: 3, 
            title: "Semillas",
            description: "Crackers a base de harina de arroz con mix de semillas",
            price: 200.00,
            stock: 10,
            image: "/semillas.jpg"
        }]

    useEffect(()=>{
        //este fetch deberia traer de la API el producto con :id=id
        // fetch('https://fakestoreapi.com/products/')
        //     .then(res=>res.json())
        //     .then(data=>setItems(data))
        setItems(mockItems);
        console.log(name)
        console.log(items.find(item=>item.title === name))
    }, [])

    if (items.length<=0) {
        return (
            <>Cargando...</>
        )
    } else {
        return (
            <div className="Items-gallery">
                <ItemDetail item={items.find(item=>item.title === name)}/>
            </div>
        )
    }
}

export default ItemDetailCointainer;