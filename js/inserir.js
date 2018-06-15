//INSERE CONTATO
document.querySelector('#formulario').addEventListener("submit", function(event){
    
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
    console.log(this);
});