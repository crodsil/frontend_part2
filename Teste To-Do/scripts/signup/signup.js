let nomeCriarConta = document.getElementById("nome");
let apelidoCriarConta = document.getElementById("apelido");
let emailCriarConta = document.getElementById("email");
let senhaCriarConta = document.getElementById("senha");
<<<<<<< HEAD
// let repetirSenhaCriarConta = getElementById("repetirSenha");
let botaoCadastro = document.getElementById("botaoCadastro")


=======
let botaoCadastro = document.getElementById("botaoCadastro")

let cadastro = false;
>>>>>>> 10f92222dc242a7f0b998a207228ed2c1c096817

botaoCadastro.addEventListener('click', function(event) {

    event.preventDefault();

    let dados = {
<<<<<<< HEAD
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string"
      };

    
    fetch('https://ctd-todo-api.herokuapp.com/v1/users',    {
        method: 'POST',
        body: dados,
        headers: {
            'content-type':'application/json'

        }
    
    })

    .then(function(response){
        return response.json()

    })
    
 console.log(dados); 

})
=======
        "firstName": nomeCriarConta.value,
        "lastName": apelidoCriarConta.value,
        "email": emailCriarConta.value,
        "password": senhaCriarConta.value
      };

    
    fetch(`https://ctd-todo-api.herokuapp.com/v1/users`,    {
        method: 'POST',
        headers: {
            "Content-type" : 'application/json'
        },
        body: JSON.stringify(dados)
    
    })

    .then(response => response.json())

       
 console.log(dados); 

})

>>>>>>> 10f92222dc242a7f0b998a207228ed2c1c096817
