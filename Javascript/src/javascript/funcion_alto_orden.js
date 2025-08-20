const miFuncion = (function() {
  var mensaje = "hola mundo"

  console.log(mensaje)

  function saludando() {
    console.log(`Mensaje dentro del clousure: ${mensaje}`)
  }

  return saludando
  
})()


console.log(typeof miFuncion)

miFuncion()

console.log(typeof mensaje)



const counter = (function() {
  let contador = 0

  console.log("Inicializacion de objecto counter...")


  function showContador(){
    console.log(contador)
  }

  const inc = function () {
    contador = contador + 1
  }

  const dec = () => {
    contador--
  }

  return {
    show: showContador,
    inc,
    dec
  }


})()

console.log(counter, typeof counter)

counter.show()
counter.inc()
counter.inc()
counter.inc()
counter.show()

