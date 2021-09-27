import ItemCount from "./ItemCount.js"

const ItemDetail = (props) => {
    console.log(props.item)
    const {image, title, description} = props.item;
    
    return (
        <div className="card" style={{width: "20%", backgroundColor: "gray"}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p style={{height: "30vh", overflow: "hidden" }} className="card-text">{description}</p>
                <ItemCount stock={5} initial ={1} onAdd={()=>{console.log("Se agrego el item al carrito")}}/>
            </div>
        </div>
        
    )
}

export default ItemDetail;