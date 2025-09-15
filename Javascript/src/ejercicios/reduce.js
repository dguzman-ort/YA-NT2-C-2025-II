import {personas, EDAD_MINIMA} from './personas'

// Referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

/**
 * CONSIGNA FINAL: Dada una lista de contactos, crear una funcion que agrupe los 
 * contactos segun la primera letra de su nombre (nombre completo). 
 * Esta seria la estructura esperada:
 * 
 * {
 * 
 *    M: [{}, {}, ..., {} ],
 *    C: [{}, {}, ..., {}]
 *    L: [{nombreCompleto: "Landa, Gabriel", edad: 48, telefono: "22-121-941"}, ..., {}]
 * 
 * }
 * 
 */


const contactosAgrupados = personas.reduce((grupo,persona) => {
    //agarramos la primera letra del apellido
    const primeraLetra = persona.lastName[0].toUpperCase();

    return {
        //generamos una copia del grupo, y le agregamos en la key de la primera letra: Si ya se creo el array o si el array esta vacío,
        // le agregamos la persona en la key que corresponda. El , persona remplaza al push
        ...grupo,
        [primeraLetra] : [...(grupo[primeraLetra] || []), persona]
    }
},{})