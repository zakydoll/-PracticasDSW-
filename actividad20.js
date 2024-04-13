let num1 = 5;
let num2 = 8;

// Verificar si num1 no es mayor que num2 o son iguales
if (!(num1 > num2) || num1 === num2) {
  alert("num1 no es mayor que num2 o son iguales.");
} else {
  alert("num1 es mayor que num2.");
}

// Incrementar num1 hasta que sea mayor que num2
while (num1 <= num2) {
  alert("Incrementando num1...");
  num1++;
}

alert("Ahora num1 es mayor que num2: " + num1);