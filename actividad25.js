
// Función para realizar operaciones matemáticas
function operacionesMatematicas(operacion, a, b) {
  switch (operacion.toLowerCase()) {
    case "sumar":
      return a + b;
    case "restar":
      return a - b;
    case "multiplicar":
      return a * b;
    case "dividir":
      return a / b;
    case "residuo":
      return a % b;
    default:
      return 0;
  }
}

// Ejemplos de uso
determinarParImpar(); // Ejemplo 1
avisoHuracan(true); // Ejemplo 2
let resultadoOperacion = operacionesMatematicas("sumar", 5, 3); // Ejemplo 3
alert("El resultado de la operación es: " + resultadoOperacion);
