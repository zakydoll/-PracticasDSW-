let diasSemana = [];


for (let i = 0; i < 7; i++) {
    let dia = prompt("Ingrese el día de la semana:");
    
    
    diasSemana.push(dia);
}


let mensaje = "Los días de la semana son:\n";
for (let i = 0; i < diasSemana.length; i++) {
    mensaje += diasSemana[i] + "\n";
}


alert(mensaje);