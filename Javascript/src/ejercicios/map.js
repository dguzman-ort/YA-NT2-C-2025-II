
import {personas, EDAD_MINIMA} from './personas.js'

// Referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

/**
 * CONSIGNA: Realizar una funcion que dado un array de objetos `personas`
 * devuelva un array con un atributo `allowed` (_boolean_) que indique 
 * si puede entrar o no en un casino
 */


const arrayAllowed = personas.map(persona => {
    return {
        ...persona,
        allowed: persona.age >= EDAD_MINIMA
    }
})

console.log(arrayAllowed)
