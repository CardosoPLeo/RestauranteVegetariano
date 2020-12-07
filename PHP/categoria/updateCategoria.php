<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
require './db_config.php';
  
  $codigo  = $_REQUEST["codigo"];
  $nome = $_REQUEST["nome"];
  $loja = $_REQUEST["loja"];
  
  $sql = "UPDATE categorias SET nome = '".$nome."'
    WHERE codigo = '".$codigo."' and loja='".$loja."'";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM categorias WHERE codigo = '".$codigo."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
  

?>