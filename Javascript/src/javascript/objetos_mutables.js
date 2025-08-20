const o1 = {
  a: 'a',
  b: 'b',
  c: function() { console.log(hola) },
  obj: {
    key: 'key'
  }
}

console.log(o1)

const o2 = o1

console.log(o1, o2)

o2.a = 'Z'

console.log(o1, o2)

o1.b = 'Y'

console.log(o1,o2)



const o3 = Object.assign({}, o1)

console.log(o3)
o3.a = 'New Value'

console.log(o1, o2, o3)