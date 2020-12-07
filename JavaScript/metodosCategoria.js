var url = "https://leocardoso.000webhostapp.com/";
var loja = "Restaurante";

$( document ).ready(function() {
    buscarDados();
	
	function buscarDados() {
		$.post(url+"getCategorias.php",
		
		{'loja':loja}
		
		).done(function(data){
		    var obj = JSON.parse(data)
			montarLinhas(obj.categorias);
			$("#divForm").slideUp();
		})
		.fail(function(){
		   alert("falha");
		});
		
	}  	
	function incluirDados() {			
		$.post(url+"createCategoria.php",
		{"nome":$("#frmNome").val(),
		 "loja":loja}
		 )
		.done(function(data){
		    console.log(data);
			buscarDados();
		})
		.fail(function(){
		   alert("falha");
		});		
	}  	
	function alterarDados() {			
		$.post(url+"updateCategoria.php",
		{"codigo": $("#frmCategoriaCodigo").val(),
         "nome": $("#frmNome").val(),
		 "loja" :loja}
		).done(function(data){
		    console.log(data);
			buscarDados();
		})
		.fail(function(){
		   alert("falha");
		});		
	}  	
	function montarLinhas(data) {
		$("#lista").empty();
		$("#lista")
				.append($("<tr />")
					.append($("<th />").text("CÓDIGO"))
					.append($("<th />").text("NOME"))
					.append($("<th />").text("Editar"))
					.append($("<th />").text("Excluir"))
				);
		$.each(data, function( key, value ) {
			$("#lista")
				.append($("<tr />")
					.append($("<td />").text(value.codigo))
					.append($("<td />").text(value.nome))
					.append($("<td />")
						.append($("<a />")
							.text("Editar")
							.attr("href", "#")
							.attr("class", "clseditar")
						)
					)
					.append($("<td />")
						.append($("<a />")
							.text("Excluir")
							.attr("href", "#")
							.attr("class", "clsexcluir")
						)
					)
				);		
		});
	
    }
	$("body").on("click",".clseditar",function(){
			//console.log($(this).parent().siblings().eq(0).text());

   			var codigo = $(this).parent().siblings().eq(0).text();
			var nome = $(this).parent().siblings().eq(1).text();
			
			$("#frmCategoriaCodigo").val(codigo);
			$("#frmNome").val(nome);
			$("#divForm").slideDown();


	});	
	$("body").on("click",".clsexcluir",function(){
	
		$.post(url+"deleteCategoria.php",
		{"loja":loja,
		 "codigo":$(this).parent().siblings().eq(0).text()}
		).done(function(data){
		    console.log(data);
			buscarDados();
		})
		.fail(function(){
		   alert("falha");
		});
	});		
	$("#incluirAlterarCategoria").click(function(){
	   if ($("#frmCategoriaCodigo").val() !=""){
	        alterarDados();
	    }else{
			incluirDados();
		}
	});	

	$("#novoCategoria").click(function(){
			$("#frmCategoriaCodigo").val("");
			$("#frmNome").val("");
	  $("#divForm").slideToggle();
	});
});