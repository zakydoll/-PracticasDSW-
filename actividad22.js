let num = 1;
let suma = 0;

while (num <= 5) {
  suma += num;
  num++;
}

alert("La suma de los números del 1 al 5 es: " + suma); 


let num = 5;
let factorial = 1;
let i = 1;

do {
  factorial *= i;
  i++;
} while (i <= num);

alert("El factorial de 5 es: " + factorial); 

for (let i = 1; i <= 7; i++) {
  if (i === 4) {
    alert("Soy el 4to");
  }
  alert("Hola");
  if (i === 7) {
    alert("Acabamos de saludar");
  }
}


const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];

// for in
let mensajeForIn = "For in:\n";
for (let index in meses) {
  mensajeForIn += meses[index] + "\n";
}
alert(mensajeForIn);

// forEach
let mensajeForEach = "ForEach:\n";
meses.forEach(mes => {
  mensajeForEach += mes + "\n";
});
alert(mensajeForEach);

// for of
let mensajeForOf = "For of:\n";
for (let mes of meses) {
  mensajeForOf += mes + "\n";
}
alert(mensajeForOf);


meses.splice(6, 1); 

const diciembre = "Diciembre"; 
meses.push(diciembre);

let mensajeMeses = "Meses incluyendo diciembre:\n";
for (let mes of meses) {
  mensajeMeses += mes + "\n";
}
alert(mensajeMeses);
