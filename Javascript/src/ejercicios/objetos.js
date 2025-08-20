import { personas } from './personas'

/**
 * Hacer una funcion que dado un array de participantes del curso me devuelva el alumno con mayor edad.
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

function deveuvelAlumnoMayorEdad(participantes){
   let mayor = participantes[0]; // TODO: validar que tenga datos... 
    for (let i = 1; i < participantes.length; i++) {
      if (participantes[i].age > mayor.age) {
        mayor = participantes[i];
      }
    }
    return mayor;
}

function deveuvelAlumnoMayorEdad2(participantes){
   return participantes.reduce((mayor, participante) => {
    //console.log(mayor.age|| 0)

    const isGreater = (participante.age > (mayor.age || 0))

    return isGreater ? { ...participante }: mayor
     
   },{})
}

const alumnoMayor = deveuvelAlumnoMayorEdad2(personas)

console.log(`Alumno mayor: `, alumnoMayor)