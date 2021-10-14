import ProductosList from './ProductsList';
import { app } from '../firebase';
import { getDocs, collection, getFirestore, where, query} from 'firebase/firestore';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

const ProductosListContainer = () => {
    const [productos, setProductos] = useState ([])
    const {categoryId} = useParams();

    useEffect(()=>{
        async function fetchData() {
            try {
                const db = getFirestore(app);
                const q = query(collection(db, "items"), where("category", "==", categoryId));
                const querySnapshot = await getDocs(q);
                
                const categoryList = []
                querySnapshot.forEach(doc =>{
                        const item = doc.data();
                        item.id = doc.id;
                        categoryList.push(item)
                });
        
                if (!collection.size === 0) {
                    console.log("Collection does not exist");
                    return;
                }
                console.log("Collection found");
                setProductos(categoryList)
                
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
        console.log(productos)
        return (
            <div className="Productos-list container">
                <ProductosList productos={productos}/>
            </div>
        )
    }
}

export default ProductosListContainer;