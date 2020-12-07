<?php
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
require './db_config.php';
if (isset($_REQUEST["loja"])){
	$loja  = $_REQUEST["loja"]; 
	
	$sql = "SELECT codigo,nome FROM categorias WHERE loja='". $loja ."'";
	$result = $mysqli->query($sql);
	while($row = $result->fetch_assoc()){
		$json[] = $row;
	}
	$data['categorias'] = $json;
} else { 
   $data['Erro'] = "loja nao informada";
 };
	echo json_encode($data);
?>