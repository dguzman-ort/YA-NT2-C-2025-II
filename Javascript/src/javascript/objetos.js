function saludo(nombre){
  console.log('Hola ' + nombre)
}


const o = new Object()

console.log(o, typeof o)

o.firstName = 'Carlos'
o.lastName = 'Tevez'
o.isActive = false
o.age = 40
o.club = ['Boca', 'Man u', 5.6, new Object()]

o.sayHello = saludo



console.log(o, typeof o)


o.sayHello(o.club[0])

console.log(o['age'])


delete o.age

console.log(o)


console.log('*******************')

const o2 = {}

console.log(o2, typeof o2)

const key = "age"
const value = 33

o2[key] = value

console.log(o2)


console.log('*******************')

const o3 = {
  firstName: 'Daniel',
  lastName: 'Guzman',
  age: 34,
  phone: 122131231,
  academicLevel: [
    {
      title: 'BS Computer Engineer',
      year: 2013
    },
    {
      title: "MSC Computer Engineer",
      year: 2019
    }
  ]
}

console.log(o3.academicLevel)

