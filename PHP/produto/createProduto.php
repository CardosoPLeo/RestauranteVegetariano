<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
require './db_config.php';
  
//https:leocardoso.000webhostapp.com/produtos/createProduto.php?codCategoria=1&titulo=titulo&descricao=descricao&valor=100.0&quantidade=1&imagem=imagem&loja=lojaxpto
  
  
  $codCategoria = $_REQUEST["codCategoria"];
  $titulo = $_REQUEST["titulo"];
  $descricao = $_REQUEST["descricao"];
  $valor = $_REQUEST["valor"];
  $quantidade = $_REQUEST["quantidade"];
  $imagem = $_REQUEST["imagem"];
  $loja = $_REQUEST["loja"];
  
  $sql = "INSERT INTO `produto` (`categoria`, `titulo`, `descricao`, `valor`, `quantidade`, `imagem`,`loja`) VALUES  
  ('".$codCategoria."', '".$titulo."', '".$descricao."', ".$valor.", ".$quantidade.", '".$imagem."', '".$loja."')";
  //echo $sql;
  $result = $mysqli->query($sql); 
  echo json_encode($result);
  //$sql = "SELECT * FROM produto where loja='" . $loja. "'  order by codigo desc   LIMIT 1"; 
  //$result = $mysqli->query($sql);
  //$data = $result->fetch_assoc();
  //echo json_encode($data);
  

?>