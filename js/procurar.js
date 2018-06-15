var campoProcura = document.getElementById("campo-procura").addEventListener("input", function(event){
    var contatos = document.querySelectorAll(".contato>tr"); //acrescentando o seletor de hierarquia fez com que o código funcionasse
    
    if (this.value.length > 0) {
        for (var i = 0; i < contatos.length; i++) {
            var contato = contatos[i];            
            var tdNome = contato.querySelector(".info-nome");
            var nome = tdNome.textContent;

            var expressao = new RegExp(this.value, "i");
            if (expressao.test(nome)){
                contato.classList.remove("invisivel");
            } else {
                contato.classList.add("invisivel");
            }            
            //console.log(nome);
        }
    }  else {
        for (var i = 0; i < contatos.length; i++){
            var contato = contatos[i];
            contato.classList.remove("invisivel");
        }
    }  
});