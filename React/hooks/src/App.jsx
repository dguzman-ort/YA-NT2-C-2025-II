import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Odd from './components/odd'
import Control from './components/Control'
import Cronometro from './components/Cronometro'
import { IniciadoProvider } from './hooks/useIniciado'

function App() {



  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   console.log('1. MOUNTING - Inicio del componente')
  //   return () => {
  //     console.log('3. UNMOUNTING - Desmontaje del componente')
  //   }
  // },[]);

  // useEffect(() => {
  //   console.log('2. UPDATE - Cambio en el estado o props', count)
  // },[count]);

  return (
    <IniciadoProvider>
      <Cronometro />
      <Control />
    </IniciadoProvider>
  )
}

export default App
