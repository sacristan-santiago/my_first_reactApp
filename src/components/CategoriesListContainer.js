import { useEffect, useState } from 'react';
import CategoriesList from './CategoriesList';
import { app } from '../firebase';
import { getDocs, collection, getFirestore } from '@firebase/firestore';

const CategoriesListContainer = () => {
    const [productos, setProductos] = useState ([])

    useEffect(()=>{
        async function fetchData() {
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
                setProductos(itemsList)
                
            } catch (err) {
                console.log("Error serching items", err)
            }
        }
        fetchData();
    }, [])

    if (productos.length<=0) {
        return (
            <>Cargando...</>
        )
    } else {
        return (
            <div className="Productos-list container">
                <CategoriesList productos={productos}/>
            </div>
        )
    }
}

export default CategoriesListContainer;