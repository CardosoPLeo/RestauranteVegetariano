<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
require './db_config.php';
//https://leocardoso.000webhostapp.com/Restaurante/categoria/createCategoria.php?nome=teste&loja=lojaxpto
  $nome = $_REQUEST["nome"];
  $loja = $_REQUEST["loja"];
  
  $sql = "INSERT INTO categorias (nome,loja) 
	VALUES ('".$nome."','".$loja."')";
  $result = $mysqli->query($sql);
  
  
  $sql = "SELECT * FROM categorias where loja='" . $loja. "'  order by codigo desc   LIMIT 1"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);

?>