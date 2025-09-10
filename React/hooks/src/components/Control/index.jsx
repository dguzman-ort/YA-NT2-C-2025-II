import { useIniciado } from '../../hooks/useIniciado'



const Control = () => {

  const { estaIniciado, toggleIniciado } = useIniciado()
  
  return (
    <div className="card">
      <button onClick={toggleIniciado}>
        {estaIniciado ? 'Pausar' : 'Iniciar'}
      </button>
      
      
      <button>
        Reiniciar
      </button>
    </div>
  )
}

export default Control;