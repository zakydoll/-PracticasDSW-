<?php
if(isset($_POS['contacto'])){
      $nombre=$_POST['Nombre']; 
      $telefono=$_POST['Telefono']; 
      $correo=$_POST['Correo'];
      $comentarios=$_POST['Comentarios'];
      
      $guardar = "INSERT INTO contactos VALUES ('$Nombre','$Telefono','$Correo','$Comentarios','')";

      $ejecutar = mysqli_query($conexion,$guardar);

      

}
?>