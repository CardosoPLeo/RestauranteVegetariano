function Login(){
    
    var done = 0;
    var user = document.querySelector(".nomeForm")[0].value;
    user = user.ToUpperCase();
    var senha = document.querySelector(".senhaForm")[0].value;
    senha = senha.ToUpperCase();

    if(user == 'abc' && senha == 'abc')
    {
       window.location = "cadastros.html" ;
       done = 1;
    }
    if(done == 0 )
    {
        alert("Usuário não cadastrado ou dados incorretos")
    }
    return;
 }