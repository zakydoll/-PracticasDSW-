// Función para determinar si un número es par o impar
function determinarParImpar() {
  let numero = prompt("Ingrese un número:");

  // Validar si el número ingresado es válido
  if (isNaN(numero)) {
    alert("Ingrese un número válido.");
    return;
  }

  numero = Number(numero);

  if (numero % 2 === 0) {
    alert(numero + " es un número par.");
  } else {
    alert(numero + " es un número impar.");
  }
}


