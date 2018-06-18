function edita()
{

}

function salvarContato(event) {

    event.preventDefault();

    var contatos = [
        document.querySelector("#campo-nome"),
        document.querySelector("#campo-email"),
        document.querySelector("#campo-telefone"),
        document.querySelector("#campo-nasc")
    ];

        
    var tr = document.createElement('tr');
    var td;
    var input;
        
    contatos.forEach(function(elemento, index) {
        td = document.createElement('td');
        td.textContent = elemento.value;

        if (index == 0) 
        {
            td.className = "info-nome";
        }

        tr.appendChild(td);
    });
    var tdRemover;
    var tdEditar;
    var inputRemover;
    var inputEditar;

    inputRemover = document.createElement("input");
    inputRemover.type = "image";
    inputRemover.src = "img/remove.gif";
    inputRemover.className = "btn-remover";
    inputRemover.onclick = remove;

    tdRemover = document.createElement('td');
    tdRemover.appendChild(inputRemover);

    tr.appendChild(tdRemover);

    inputEditar = document.createElement("input");
    inputEditar.type = "image";
    inputEditar.src = "img/edit.gif";
    inputEditar.className = "btn-editar";
    inputEditar.onclick = edita;

    tdEditar = document.createElement('td');
    tdEditar.appendChild(inputEditar);

    tr.appendChild(tdEditar);
    tr.className = "contato-inserido";

    var tabela = document.querySelector("table tbody");

    tabela.appendChild(tr);

    for (var i=0; i < contatos.length; i++){
        contatos[i].value = '';
    }

    contatos[0].focus();
}

document.getElementById("campo-procura").addEventListener("input", function(event){
    debugger;
    var contatos = document.querySelectorAll(".contato>tr");

    if (this.value.length > 0) {
        for (var i = 0; i < contatos.length; i++) {
            var contato = contatos[i];

            var tdNome = contato.querySelector(".info-nome");
            var nome = tdNome.textContent;

            var expressao = new RegExp("^"+this.value, "i");
            if (expressao.test(nome)){
                contato.classList.remove("invisivel");
            } else {
                contato.classList.add("invisivel");
            }
        }

    }  
    else {
        for (var i = 0; i < contatos.length; i++){
            var contato = contatos[i];
            contato.classList.remove("invisivel");
        }
    }
});

function remove(event) 
{
    this.parentElement.parentElement.remove();
};
