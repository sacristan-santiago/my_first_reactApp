import { app } from '../firebase';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail.js';
import { getDocs, collection } from '@firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const ItemDetailCointainer = () => {
    const [items, setItems] = useState ([])
    const {name} = useParams();

    useEffect(async () => {
        try {
            const db = getFirestore(app);
            const itemsCollection = collection(db, "items")
            const itemsSnapshot = await getDocs(itemsCollection);
            const itemsList = itemsSnapshot.docs.map(doc => doc.data());
    
            if (!collection.size === 0) {
                console.log("Collection does not exist");
                return;
            }
            console.log("Collection found");
            setItems(itemsList)
            console.log(items)
        } catch (err) {
            console.log("Error serching items", err)
        }
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