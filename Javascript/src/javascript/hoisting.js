saludo()

console.log(typeof variable)
console.log(typeof saludo)

console.log(typeof noFunction)

var variable 


// Reconocido por mecanismo hoisting
function saludo() {
  console.log("Hola NT2")
}

// Este no!
var noFunction = function() {
    console.log("Hola No soy tomado en cuenta por el hoisting!!!")
}

noFunction()