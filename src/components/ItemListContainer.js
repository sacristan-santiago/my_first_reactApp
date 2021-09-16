import Pais from './Pais'

const ItemListContainer = (props) => {
    console.log(props)
    const paises = props.paises.map (x => <Pais pais={x} />)
    return (
        <div className="Paises-list">
            <p>Desembarcaremos en los siguientes países:</p>
            <ul>
                {paises }
            </ul>
        </div>
    )
}

export default ItemListContainer;