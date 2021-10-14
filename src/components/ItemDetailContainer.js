import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail.js';
import { app } from '../firebase';
import { getDoc, doc } from '@firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const ItemDetailCointainer = () => {
    const [item, setItem] = useState ({})
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        async function fetchData() {
            try {
                const db = getFirestore(app);
                const docRef = doc(db, "items", id)
                const docSnap = await getDoc(docRef)
        
                if (!docSnap.exists()) {
                    console.log("Collection does not exist");
                } else  {
                    console.log("Collection found");
                    const renderItem = docSnap.data();
                    renderItem.id = docSnap.id
                    setItem(renderItem)
                    console.log(item)
                }
            } catch (err) {
                console.log("Error serching items", err)
            }
        }
        fetchData();

    }, [])

    if (!item.id) {
        return (
            <>Cargando...</>
        )
    } else {
        return (
            <div className="Items-gallery">
                <ItemDetail item={item}/>
            </div>
        )
    }
}

export default ItemDetailCointainer;