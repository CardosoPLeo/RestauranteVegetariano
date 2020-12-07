var url = "https://leocardoso.000webhostapp.com/";
var loja = "Restaurante";

$( document ).ready(function() {
    buscarDados();
	
	function buscarDados() {
		$.post(url+"getProduto.php",
		
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
		$.post(url+"createProduto.php",
		{"codigo":$("#frmCodgio").val(),
         "loja":loja},

         {"descricao":$("#frmDescricao").val(),
         "loja":loja},

         {"titulo":$("#frmTitulo").val(),
         "loja":loja},

         {"categoria":$("#frmCategoria").val(),
         "loja":loja},

         {"valor":$("#frmValor").val(),
         "valor":loja},

         {"imagem":$("#frmImagem").val(),
         "valor":loja},

         {"quantidade":$("#frmQtd").val(),
         "loja":loja},

         {"loja":$("#frmLoja").val(),
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
        $.post(url+"updateProduto.php",
        {"codigo": $("#frmProdutoCodigo").val(),
         "codigo": $("#frmCodigo").val(),
         "loja" :loja},

		{"codigo": $("#frmProdutoCodigo").val(),
         "descricao": $("#frmNome").val(),
         "loja" :loja},
         
         {"codigo": $("#frmProdutoCodigo").val(),
         "titulo": $("#frmTitulo").val(),
         "loja" :loja},

         {"codigo": $("#frmProdutoCodigo").val(),
         "titulo": $("#frmTitulo").val(),
         "loja" :loja},

         {"codigo": $("#frmProdutoCodigo").val(),
         "categoria": $("#frmCategoria").val(),
         "loja" :loja},

         {"codigo": $("#frmProdutoCodigo").val(),
         "valor": $("#frmValor").val(),
         "loja" :loja},

         {"codigo": $("#frmProdutoCodigo").val(),
         "imagem": $("#frmImagem").val(),
         "loja" :loja},

         {"codigo": $("#frmProdutoCodigo").val(),
         "loja": $("#frmLoja").val(),
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
					.append($("<th />").text("Código"))
					.append($("<th />").text("Descricao"))
					.append($("<th />").text("Título"))
					.append($("<th />").text("Categoria"))
					.append($("<th />").text("Valor"))
					.append($("<th />").text("Imagem"))
					.append($("<th />").text("Loja"))
					.append($("<th />").text("Editar"))
					.append($("<th />").text("Excluir"))
				);
		$.each(data, function( key, value ) {
			$("#lista")
				.append($("<tr />")
					.append($("<td />").text(value.codigo))
					.append($("<td />").text(value.descricao))
					.append($("<td />").text(value.titulo))
					.append($("<td />").text(value.categoria))
					.append($("<td />").text(value.valor))
					.append($("<td />").text(value.imagem))
					.append($("<td />").text(value.loja))
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
			
			$("#frmCodigo").val(codigo);
			$("#frmDescricao").val(descricao);
			$("#frmTitulo").val(titulo);
			$("#frmCategoria").val(categoria);
			$("#frmValor").val(valor);
			$("#frmImagem").val(imagem);
			$("#frmLoja").val(loja);
			$("#divForm").slideDown();


	});	
	$("body").on("click",".clsexcluir",function(){
	
		$.post(url+"deleteProduto.php",
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
	$("#incluirAlterarProduto").click(function(){
	   if ($("#frmCodigo").val() !=""){
	        alterarDados();
	    }else{
			incluirDados();
        }
        
        if ($("#frmDescricao").val() !=""){
	        alterarDados();
	    }else{
			incluirDados();
        }
        
        if ($("#frmTitulo").val() !=""){
	        alterarDados();
	    }else{
			incluirDados();
        }
        
        if ($("#frmCategoria").val() !=""){
	        alterarDados();
	    }else{
			incluirDados();
        }
        
        if ($("#frmValor").val() !=""){
	        alterarDados();
	    }else{
			incluirDados();
        }
        
        if ($("#frmImagem").val() !=""){
	        alterarDados();
	    }else{
			incluirDados();
        }
        
        if ($("#frmLoja").val() !=""){
	        alterarDados();
	    }else{
			incluirDados();
        }
	});	

	$("#novoProduto").click(function(){
			$("#frmCodigo").val("");
			$("#frmNome").val("");
	  $("#divForm").slideToggle();
	});
});