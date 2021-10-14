import Category from "./Category"

const CategoriesList = (props) => {
    const productos = props.productos;
    const categories = []
    for (let i=0; i<productos.length; i++) {
        if (!categories.some(x=> x.category == productos[i].category)) {
            categories.push(productos[i])
        }
    }
    
    return (
        <>
            {categories.map(x => {
                return <Category key={x.category} category={x}/>
            })}
        </>
    )
}

export default CategoriesList;