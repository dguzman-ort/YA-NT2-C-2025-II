if (true){
  var ambito = "Esta variable estara disponible hasta que el codigo y/o funcion se ejecute"

  console.log(ambito)
}

console.log(ambito, typeof ambito)


if (true){
  let blockScoped = "Esta variable solo estara disponible dentro de este bloque de codigo"

  console.log("blockScoped", blockScoped)

  const otroBlock = "Esta constante solo estara disponible denteo de este bloque de control"

  console.log("otroBlock", otroBlock)
  
}

console.log("blockScoped", typeof blockScoped)
console.log("otroBlock", typeof otroBlock)