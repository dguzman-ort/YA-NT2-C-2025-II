import {personas, EDAD_MINIMA} from './personas.js'

//Referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

/**
 * CONSIGNA:realizar una funcion que dado un array de objetos persona devuelva
 * un nuevo array solamente con las personas que puedan entrar al casino
 * 
 * [
 *  {
 *    firstName,
 *    lastName,
 *    age
 *  },
 *  ...,
 *  n
 * ]
 */

const puedenIngresar = personas.filter(persona => persona.age >= EDAD_MINIMA)
console.log(puedenIngresar)