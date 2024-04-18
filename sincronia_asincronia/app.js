// const persona = {
//   nombre: "Franco",
//   edad: 25,
//   saludar: () => {
//     console.log(`Hola, mi nombre es ${persona.nombre}`);
//   },
// };
// persona.saludar();

//Callback

// HANDS ON LABS

function suma(a, b) {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      reject("Operación inncesaria");
    } else if (a + b < 0) {
      reject("La calculadora solo debe devolver valores positivos");
    } else {
      resolve(a + b);
    }
  });
}

function resta(minuendo, sustraendo) {
  return new Promise((resolve, reject) => {
    if (minuendo === 0 || sustraendo === 0) {
      reject("Operación inválida");
    } else if (minuendo - sustraendo < 0) {
      reject("La calculadora solo debe devolver valores positivos");
    } else {
      resolve(minuendo - sustraendo);
    }
  });
}

function mutliplicacion(factor1, factor2) {
  return new Promise((resolve, reject) => {
    if (factor1 < 0 || factor2 < 0) {
      reject("La calculadora debe devolvver valores positivos");
    } else {
      resolve(factor1 * factor2);
    }
  });
}

function division(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject("No se puede dividir por 0");
    } else {
      resolve(dividendo / divisor);
    }
  });
}

//Función asincrona para resalizar los cálculos

async function calculos() {
  try {
    const resultadoSuma = await suma(4, 4);
    console.log("Resultado suma = ", resultadoSuma);

    const resultadoResta = await resta(10, 3);
    console.log("Resultado resta = ", resultadoResta);

    const resultadoMultiplicacion = await mutliplicacion(4, 6);
    console.log("Resultado multiplicación ", resultadoMultiplicacion);

    const resultadoDivision = await division(4, 2);
    console.log("Resultado división = ", resultadoDivision);
  } catch (error) {
    console.error("Error", error);
  }
}

calculos();
