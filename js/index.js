var contatos = [
    document.querySelector("#campo-nome"),
    document.querySelector("#campo-email"),
    document.querySelector("#campo-telefone"),
    document.querySelector("#campo-nasc"),
];

//INSERE CONTATO
document.querySelector('#formulario').addEventListener("submit", function(event){
    //console.log(this);
    
    event.preventDefault();

    var tr = document.createElement('tr');

    contatos.forEach(function(posicao){
        td = document.createElement('td');
        td.textContent = posicao.value;
        tr.appendChild(td);
    });

    var tabela = document.querySelector("table tbody");

    tabela.appendChild(tr);

    for (var i=0; i < contatos.length; i++){
        contatos[i].value = '';
    }

    contatos[0].focus();
    //console.log(this);
});

//BUSCA CONTATO
var campoProcura = document.getElementById("campo-procura").addEventListener("input", function(event){
    var contatos = document.querySelectorAll(".contato>tr"); //acrescentando o seletor de hierarquia fez com que o código funcionasse
    //console.log(this);    
    
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