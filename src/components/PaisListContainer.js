import { useEffect, useState } from 'react';
import PaisesList from './PaisesList';

const PaisListContainer = (props) => {
    const [paises, setPaises] = useState ([])

    useEffect(()=>{
        const mockAsync = new Promise ((res)=> {
            setTimeout(()=> {
                res(props.paises)
            }, 2000)
        })

        mockAsync.then((resultado)=> {
            setPaises(resultado)
        })
    }, [])


    return (
        <div className="Paises-list">
            <p>Desembarcaremos en los siguientes países:</p>
            <PaisesList paises={paises}/>
        </div>
    )
}

export default PaisListContainer;