function calcularPromedio() {
  let notas = [];
  let promedio;
  let suma = 0;

  // Obtener las notas de las asignaturas
  for (let i = 1; i <= 8; i++) {
    let nota = parseFloat(document.getElementById("asignatura" + i).value);
    // Verificar si el campo está vacío
    if (isNaN(nota)) {
      alert("Por favor ingrese todas las notas.");
      document.getElementById("asignatura" + i).focus();
      return;
    }
    notas.push(nota);
    suma += nota;
  }

  // Calcular promedio
  promedio = suma / 8;

  // Mostrar el promedio
  alert("El promedio final es: " + promedio.toFixed(2));

  // Determinar si está exento de ordinario o debe presentar examen ordinario
  if (promedio > 85) {
    alert("Está exento de ordinario.");
  } else {
    alert("Debe presentar examen ordinario.");
  }
}
