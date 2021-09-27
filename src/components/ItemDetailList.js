import ItemDetail from "./ItemDetail"

const ItemDetailList = (props) => {
    const items = props.items
    
    return (
        <div className="Items-gallery">
            {items.map(x=><ItemDetail item={x}/>)}
        </div>
        
    )
}

export default ItemDetailList;