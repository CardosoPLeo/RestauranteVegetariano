<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
 require './db_config.php';
 
 $codigo  = $_REQUEST["codigo"];
 $loja = $_REQUEST["loja"];
  
  if($codigo > 3) {
 
 $sql = "DELETE FROM categorias WHERE codigo = ".$codigo." and loja='".$loja."'";
 $result = $mysqli->query($sql);
 echo json_encode([$codigo]);
 
 }else{
    echo json_encode("codigo invalido");
 }
?>