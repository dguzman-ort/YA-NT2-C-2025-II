function obtenerUsuarioBD(callback){
  // Esta funcion simula una llamada a una API y/o una obtenerUsuarioBD

  setTimeout(() => {
    // Esta data es la que me devuelve mi API 
    const userData = {
      firstName: 'Jose',
      //lastName: 'Madrid',
      age: 17
    }

    return callback(userData)


  }, 5000)

}

function saludoUser(user){
  console.log(`Hola ${user.firstName} ${user.lastName || ''}, como estas?`)
}

function validarEdad(user){
  if (user.age >= 18){
    console.log(`Hola ${user.firstName} ${user.lastName || ''}, Bienvenido al Banana`) 
  }else{
    console.warn(`Sorry!`)
  }
}

console.log("Inicio mi ejecucion")

//obtenerUsuarioBD(saludoUser)
//obtenerUsuarioBD(validarEdad)

console.log("Mi codigo se sigue ejecutando...")



obtenerUsuarioBD(console.log)