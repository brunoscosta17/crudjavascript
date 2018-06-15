var contatos = document.querySelectorAll(".contato>.contato-inserido");

contatos.forEach(function(contatos){
    console.log(contatos);
    
    document.getElementById("remover").addEventListener("click", function(){

        contatos.remove();
    })
})