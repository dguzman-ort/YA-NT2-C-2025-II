import { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/Saludo'

function App() {
  
  const [curso, setCurso] = useState("NT2 C")

  function cambiarNombre(){
    const nuevoNombre = prompt("Ingrese el nuevo nombre")
    setCurso(nuevoNombre)
  }

  return (
    <>
      <div>
        <Saludo name="Juan" age={20} />
        <h1>Hello world {curso}</h1>
        <Saludo name={curso} active={{}} />
        <Saludo />
        <Saludo />
        <Saludo />
        <Saludo />

        <button onClick={cambiarNombre}>Cambiar nombre</button>
      </div>
    </>
  )
}

export default App
