<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
require './db_config.php';

//https://leocardoso.000webhostapp.com/Restaurante/produtos/updateProduto.php?codigo=6&codCategoria=1&titulo=tituloteste&descricao=descricao&valor=100.0&quantidade=1&imagem=imagem&nome=nome&email=email&senha=senha&endereco=endereco&complemento=complemento&cidade=cidade&estado=UF&cep=cep&longitude=-42&latitude=-22&loja=lojaxpto
  
  $codigo  = $_REQUEST["codigo"];
  $loja = $_REQUEST["loja"];
  
  $codCategoria = $_REQUEST["codCategoria"];
  $titulo = $_REQUEST["titulo"];
  $descricao = $_REQUEST["descricao"];
  $valor = $_REQUEST["valor"];
  $quantidade = $_REQUEST["quantidade"];
  $imagem = $_REQUEST["imagem"];
  
  if($codigo > 4) {
 
  $sql = "UPDATE `produto` SET `categoria` = '".$codCategoria."',
  `titulo` = '".$titulo."', `descricao` = '".$descricao."',
  `valor` = '".$valor."', `quantidade` = '".$quantidade."', `imagem` = '".$imagem."' 
   WHERE codigo = '".$codigo."' and loja='".$loja."'";
  $result = $mysqli->query($sql);
  
  $sql = "SELECT * FROM produto WHERE codigo = '".$codigo."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
  
  }else{
    echo json_encode("codigo invalido");
  }

?>