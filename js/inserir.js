function adicionarContato(event) {

    event.preventDefault();

    var contatos = [
        document.querySelector("#campo-nome"),
        document.querySelector("#campo-email"),
        document.querySelector("#campo-telefone"),
        document.querySelector("#campo-nasc")
    ];
        
    var tr = document.createElement('tr');
    var td;
        
    contatos.forEach(function(elemento){
        
        td = document.createElement('td');
        td.textContent = elemento.value;
        tr.appendChild(td);
    });

    var tabela = document.querySelector("table tbody");

    tabela.appendChild(tr);

    for (var i=0; i < contatos.length; i++){
        contatos[i].value = '';
    }

    contatos[0].focus(); 
}