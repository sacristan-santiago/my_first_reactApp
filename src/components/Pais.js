const Pais = (props) => {
    const pais = props.pais
    return (
        <li key={pais}>{pais}</li>
    )
}

export default Pais;