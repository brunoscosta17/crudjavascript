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
        
    contatos.forEach(function(elemento){
        
        td = document.createElement('td');
        td.textContent = elemento.value;

        tr.appendChild(td);
    });

    input = document.createElement("input");
    input.type = "image";
    input.src = "img/remove.gif";
    input.className = "btn-remover";
    input.onclick = remove;

    td = document.createElement('td');
    td.appendChild(input);

    tr.appendChild(td);

    var tabela = document.querySelector("table tbody");

    tabela.appendChild(tr);

    for (var i=0; i < contatos.length; i++){
        contatos[i].value = '';
    }

    contatos[0].focus(); 
}