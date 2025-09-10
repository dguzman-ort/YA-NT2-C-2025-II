import { useState, useEffect, useRef } from 'react'
import { useIniciado } from '../../hooks/useIniciado'


const Cronometro = () => {
  const { estaIniciado } = useIniciado()
  const [segundos, setSegundos] = useState(0)
  const intervalo = useRef(null)


  useEffect(() => {
    console.log('estaIniciado', estaIniciado)

    if (estaIniciado) {
      intervalo.current = setInterval(() => {
        //console.log('segundos', segundos)
        setSegundos((valorPrevio) => {
          console.log('valorPrevio', valorPrevio)
          return valorPrevio + 1
        })
      }, 1000)
    }else{
      console.log('clearInterval', intervalo.current)
      clearInterval(intervalo.current)
    }
  }, [estaIniciado]);

  return (
    <div>
      <h1>{segundos}</h1>
    </div>
  )
}

export default Cronometro;