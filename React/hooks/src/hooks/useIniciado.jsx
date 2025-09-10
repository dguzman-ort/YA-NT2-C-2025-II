import { useContext, createContext, useState } from 'react'

const IniciadoContext = createContext()

/**
 * Proveedor de contexto para el estado de inicio del cronometro
 */
export function IniciadoProvider({ children }) {

  const [estaIniciado, setEstaIniciado] = useState(false)

  const toggleIniciado = () => setEstaIniciado(!estaIniciado)


  return (
    <IniciadoContext.Provider value={{
      estaIniciado,
      toggleIniciado
    }}>
      {children}
    </IniciadoContext.Provider>
  )

}

export function useIniciado() {
  const estaIniciado = useContext(IniciadoContext)

  if(!estaIniciado){
    throw new Error('useIniciado debe ser usado dentro de un IniciadoProvider')
  }

  return estaIniciado
}

