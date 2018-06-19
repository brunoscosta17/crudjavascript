crudjs = {
    contacts: {
        
        // Clear the create contact form fields
        fnClearForm: function(contactFormFields) 
        {
            for (var i = 0; i < contactFormFields.length; i++) {
                contactFormFields[i].value = '';
            }

            contactFormFields[0].focus();
        },

        fnGetContacts : function() {
            var contacts = localStorage.getItem("contacts");
            if (contacts === null) 
            {
                return [];
            }
            else {
                return JSON.parse(contacts);                
            }
        },

        fnGetNextId : function() {

        },

        // Creates a new contact using the information from the form
        fnCreateNew: function(event) 
        {
            event.preventDefault();

            let contactFormFields = [
                document.querySelector("#campo-nome"),
                document.querySelector("#campo-email"),
                document.querySelector("#campo-telefone"),
                document.querySelector("#campo-nasc")  
            ];

            let contact = {
                Id : null,
                Name : contactFormFields[0].value,
                Email : contactFormFields[1].value,
                Telefone : contactFormFields[2].value,
                DAO : contactFormFields[3].value             
            };  

            // save in a persistance layer
            contact = this.fnSaveInStorage(contact);

            // show in screen
            this.fnRender(contact);
            
            // clear form fields
            this.fnClearForm(contactFormFields);
        },

        // Saves the contact in a persistance layer
        fnSaveInStorage: function(contact) {
            let contacts = this.fnGetContacts();
            if (contacts.length === 0) return 1;
            let newId = contacts[contacts.length - 1].Id + 1; 
            contact.Id = newId;

            return contact;
        },

        // Create another table row, containing the new contact
        fnRender: function (contact) {           

            var tr = document.createElement('tr');
            var td;
            var input;

            for (let property in contact) {
                td = document.createElement('td');
                td.textContent = contact[property];

                if (property === "Name") {
                    td.className = "info-nome";
                }

                tr.appendChild(td);
            }

            var tdRemover;
            var tdEditar;
            var inputRemover;
            var inputEditar;

            inputRemover = document.createElement("input");
            inputRemover.type = "image";
            inputRemover.src = "img/remove.gif";
            inputRemover.className = "btn-remover";
            inputRemover.onclick = crudjs.contacts.fnRemove;

            tdRemover = document.createElement('td');
            tdRemover.appendChild(inputRemover);

            tr.appendChild(tdRemover);

            inputEditar = document.createElement("input");
            inputEditar.type = "image";
            inputEditar.src = "img/edit.gif";
            inputEditar.className = "btn-editar";

            tdEditar = document.createElement('td');
            tdEditar.appendChild(inputEditar);

            tr.appendChild(tdEditar);
            tr.className = "contato-inserido";

            var tabela = document.querySelector("table tbody");

            tabela.appendChild(tr);            
        },
        
        fnRemove: function (event) 
        {
            this.parentElement.parentElement.remove();
        },

        // Searches for a contact by first name
        fnSearch: function (event) {
            var contatos = document.querySelectorAll(".contato>tr");
        
            if (this.value.length > 0) {
                for (var i = 0; i < contatos.length; i++) {
                    var contato = contatos[i];
        
                    var tdNome = contato.querySelector(".info-nome");
                    var nome = tdNome.textContent;
        
                    var expressao = new RegExp("^" + this.value, "i");
                    if (expressao.test(nome)) {
                        contato.classList.remove("invisivel");
                    } else {
                        contato.classList.add("invisivel");
                    }
                }        
            }
            else {
                for (var i = 0; i < contatos.length; i++) {
                    var contato = contatos[i];
                    contato.classList.remove("invisivel");
                }
            }
        }
    }
};
