import { NavLink } from "react-router-dom";

const Producto = (props) => {
    const { title, description, image, id } = props.producto
    const route = `/item/${id}`

    return (
    <div className="card" style={{width: "20%", backgroundColor: "gray"}}>
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p style={{height: "15vh", overflow: "hidden" }} className="card-text">{description}</p>
        </div>
        <NavLink className="nav-link" to={route}><button type="button" className="btn btn-dark">Comprar</button></NavLink>
        
    </div>
    )
}

export default Producto;