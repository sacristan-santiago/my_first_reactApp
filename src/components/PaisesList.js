import Pais from "./Pais"

const PaisesList = (props) => {
    const paises = props.paises
    console.log(paises)
    return (
        <ul>
            {paises.map(x=><Pais pais={x}/>)}
        </ul>
        
    )
}

export default PaisesList;