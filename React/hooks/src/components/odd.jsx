import { useEffect } from 'react'


const Odd = ({ number }) => {
    useEffect(() => {
       console.log('MOUNTING - Montaje del componente')
       return () => {
        console.log('UNMOUNTING - Desmontaje del componente')
       } 
    },[]);
    return <div>PAR: {number}</div>
}

export default Odd;