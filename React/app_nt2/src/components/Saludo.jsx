const Saludo = ({ name, active }) => {
  return (
    active?
      <h1>Hola {name ? name : "Mundo"}</h1>
      :<></>
  )
}

export default Saludo;