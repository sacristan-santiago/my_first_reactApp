import { NavLink } from "react-router-dom";

const Category = (props) => {
    const {description, image, category} = props.category
    const route = `/categoria/${category}`

    return (
    <div key={category} className="card" style={{width: "20%", backgroundColor: "gray"}}>
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{category.toUpperCase()}</h5>
            {/* <p style={{height: "15vh", overflow: "hidden" }} className="card-text">{description}</p> */}
        </div>
        <NavLink className="nav-link" to={route}><button type="button" className="btn btn-dark">Ver productos</button></NavLink>
    </div>
    )
}

export default Category;