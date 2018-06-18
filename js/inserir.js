function salvarContato(event) {

    event.preventDefault();

    var contatos = [
        document.querySelector("#campo-nome"),
        document.querySelector("#campo-email"),
        document.querySelector("#campo-telefone"),
        document.querySelector("#campo-nasc")
    ];

    var tr = document.createElement('tr');

    contatos.forEach(function(elemento){

        td = document.createElement('td');
        td.textContent = elemento.value;

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
