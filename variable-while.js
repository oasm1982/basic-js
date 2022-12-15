var nombre = "Oscar";

// declarar
var edad;

edad
// inicializar
edad = 30;

var elementos = ["computador", "celular"];


function solution(arraySecreto) {
    if (typeof arraySecreto[0] === "string")  {
        return true;
    } else {
      return false;
    } 
  }

function solution(arraySecreto) {
    return typeof arraySecreto[0] === "string"
}


function solution(estudiantes, deathCount, nuevo) {
    if (deathCount === 0) {
      estudiantes.push(nuevo);
      return estudiantes
    } else  if ( deathCount > 0) { 
        var count = 0;
        while (deathCount > count) {
            estudiantes.pop();
            count = count + 1;
        } 
      estudiantes.push(nuevo);
      return estudiantes;
    }
  }