<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
require './db_config.php';
if (isset($_REQUEST["loja"])){
	$loja  = $_REQUEST["loja"]; 

	if (isset($_REQUEST["codigo"])) { $codigo  = $_REQUEST["codigo"]; } else { $codigo="1"; };

$sqlTotal = "SELECT produto.*, categorias.nome as categoriasNome FROM produto join categorias on categoria = categorias.codigo WHERE produto.loja='" . $loja ."' AND produto.codigo='" . $codigo . "'";
$sql = "SELECT produto.*, categorias.nome as categoriasNome FROM produto join categorias on categoria = categorias.codigo WHERE produto.loja='" . $loja ."' AND produto.codigo='" . $codigo . "'"; 
$result = $mysqli->query($sql);
  while($row = $result->fetch_assoc()){
     $json[] = $row;
  }
$data['produtos'] = $json;
//$result =  mysqli_query($mysqli,$sqlTotal);
//$data['total'] = mysqli_num_rows($result);
} else { 
   $data['Erro'] = "loja nao informada";
 };
	echo json_encode($data);
?>