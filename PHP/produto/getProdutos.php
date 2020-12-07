<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
require './db_config.php';

if (isset($_REQUEST["loja"])){
	$loja  = $_REQUEST["loja"]; 
	
	if (isset($_REQUEST["page"])) { $page  = $_REQUEST["page"]; } else { $page=1; };
	if (isset($_REQUEST["num_rec_per_page"])) { $num_rec_per_page  = $_REQUEST["num_rec_per_page"]; } else { $num_rec_per_page=100; };

	$start_from = ($page-1) * $num_rec_per_page;
	$sqlTotal = "SELECT produto.*, categorias.nome as categoriasNome FROM produto join categorias on categoria = categorias.codigo WHERE produto.loja='" . $loja ."';";
	$sql = "SELECT produto.*, categorias.nome as categoriasNome FROM produto join categorias on categoria = categorias.codigo WHERE produto.loja='" . $loja . "' LIMIT $start_from, $num_rec_per_page"; 
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