import { random } from '../utils/lib'

const MAX_VEHICULOS = 50

const vehiculoModel = {
  marca: 'Toyota',
  modelo: 'Corolla',
  year: 2020,
  color: 'Rojo',
  precio: 10000,
  imagen: 'https://www.toyota.com/img/vehicles/corolla.jpg'
}

const colors = ['Rojo', 'Azul', 'Verde', 'Amarillo', 'Negro', 'Blanco']
const marcas = ['Toyota', 'Ford', 'Chevrolet']
const modelos = {
  Toyota: ['Corolla', 'Camry', 'Rav4'],
  Ford: ['F150', 'Mustang', 'Explorer'],
  Chevrolet: ['Camaro', 'Corvette', 'Silverado']
}

const getRandomMarca = () => {
  return marcas[random(0, marcas.length - 1)]
}

const getRandomModelo = (marca) => {
  return modelos[marca][random(0,modelos[marca].length - 1)]
}

const getRandomYear = () => {
  return random(1990, 2025)
}

const getRandomPrecio = () => {
  return random(60000, 200000)
}

const getRandomColor = () => {
  return colors[random(0, colors.length - 1)]
}


const generarVehiculo = () => {
  const marca = getRandomMarca()
  const modelo = getRandomModelo(marca)
  const year = getRandomYear()
  const color = getRandomColor()
  const precio = getRandomPrecio()
  return {
    marca,
    modelo,
    year,
    color,
    precio
  }
}


const vehiculos = Array.from(
  {length: MAX_VEHICULOS}, 
  generarVehiculo
).map((vehiculo, index) => {
  return {
    ...vehiculo,
    id: index + 1,
  }
} )

//console.log(vehiculos)


const getVehiculos = () => {
  return new Promise((resolve, reject) => {
    // Simulando una llamada a una API de vehiculos
    setTimeout(() => {
      resolve(vehiculos)
    }, 1000)
  })
}


export { getVehiculos }