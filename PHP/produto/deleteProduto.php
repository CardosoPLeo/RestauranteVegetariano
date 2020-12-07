<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
 require './db_config.php';
 
 //https://leocardoso.000webhostapp.com/Restaurante/produtos/deleteProduto.php?codigo=8&loja=lojaxpto
 
 $codigo  = $_REQUEST["codigo"];
 $loja = $_REQUEST["loja"];
  
  if($codigo > 7) {
 
 $sql = "DELETE FROM produto WHERE codigo = ".$codigo." and loja='".$loja."'";
 $result = $mysqli->query($sql);
 echo json_encode([$codigo]);
 
 }else{
    echo json_encode("codigo invalido");
 }
?>