// Declarar variables
let pesoTierra;
let peso;
let opcion;
let pesoMarte;
let pesoJupiter;
let resultado;

// Solicitar el peso del usuario
peso = prompt("Ingrese su peso en kilogramos:");

// Solicitar la opción al usuario
opcion = prompt("Seleccione la opción deseada:\n1. Calcular peso en Marte\n2. Calcular peso en Júpiter");

// Calcular peso en Marte
if (opcion == 1) {
  pesoMarte = peso * 0.38;
  resultado = pesoMarte;
  alert("Su peso en Marte es de: " + resultado + " kg");
}

// Calcular peso en Júpiter
else if (opcion == 2) {
  pesoJupiter = peso * 2.36;
  resultado = pesoJupiter;
  alert("Su peso en Júpiter es de: " + resultado + " kg");
}

// Opción no válida
else {
  alert("No existe esa opción");
}