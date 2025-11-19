import { random } from '../utils/lib'

const MAX_VEHICULOS = 10

const IMAGE_URL = 'https://img.freepik.com/vector-gratis/modern-urban-adventure-suv-vehicle-illustration_1344-200.jpg'

const URL_API = 'https://us-central1-api-nt2-ejemplo.cloudfunctions.net/app/api'

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
  return modelos[marca][random(0, modelos[marca].length - 1)]
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
  const imagen = IMAGE_URL
  return {
    marca,
    modelo,
    year,
    color,
    precio,
    imagen
  }
}


let vehiculos = Array.from(
  { length: MAX_VEHICULOS },
  generarVehiculo
).map((vehiculo, index) => {
  return {
    ...vehiculo,
    id: index + 1,
  }
})

//console.log(vehiculos)


const getVehiculos = (token) => {
  return new Promise((resolve, reject) => {
    console.log('Llamada a la API de vehiculos')
    fetch(`${URL_API}/read`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        // console.log('Response', response)
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Error al obtener los vehiculos')
        }
      })
      .then(data => {
        // console.log('Data', typeof data)
        resolve(data)
      })
      .catch(error => {
        console.error('Error', error)
        reject(error)
      })
  })
}

const agregarVehiculo = (vehiculo, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${URL_API}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ ...vehiculo, urlImagen: IMAGE_URL }),
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Error al agregar el vehiculo')
        }
      })
      .then(data => {
        resolve(data)
      })
      .catch(error => {
        console.error('Error', error)
        reject(error)
      })
  })
}

const getVehiculoById = (id, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${URL_API}/read/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Error al obtener el vehiculo')
        }
      })
      .then(data => {
        resolve(data)
      })
      .catch(error => {
        console.error('Error', error)
        reject(error)
      })
  })
}

const eliminarVehiculo = (id, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${URL_API}/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.ok) {
          resolve(true)
        } else {
          throw new Error('Error al eliminar el vehiculo')
        }
      })
      .catch(error => {
        console.error('Error', error)
        reject(error)
      })
  })
}

const actualizarVehiculo = (id, vehiculo, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${URL_API}/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ ...vehiculo, urlImagen: IMAGE_URL }),
    })
      .then(response => {
        if (response.ok) {
          return resolve(true)
        } else {
          throw new Error('Error al actualizar el vehiculo')
        }
      })
      .catch(error => {
        console.error('Error', error)
        reject(error)
      })

  })
}


export {
  getVehiculos,
  getVehiculoById,
  agregarVehiculo,
  actualizarVehiculo,
  eliminarVehiculo
}