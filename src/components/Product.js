import { NavLink } from "react-router-dom";

const Producto = (props) => {
    const producto = props.producto;
    const route = `/item/${producto}`
    return (
        <li key={producto}><NavLink className="nav-link" to={route}>{producto}</NavLink></li>
    )
}

export default Producto;