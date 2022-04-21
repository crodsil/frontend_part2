var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut(){
        li.classList.toggle("done");
    }

    li.addEventListener("click",crossOut);

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem(){
        li.classList.add("delete");
    }
}

enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }
}
    
function addListAfterKeypress(){
    if(inputLength() > 0 && event.which === 13){
        createListElement();
    }
}



/*let novaTarefa = document.getElementById("novaTarea");
let botaoNovaTarefa = document.getElementById("botaoNovaTarefa")

let criandoTarefas = {
         "description": "",
         "completed": false
         
    };

let urlCriarTarefa = `https://ctd-todo-api.herokuapp.com/v1/tasks`;    

botaoNovaTarefa.addEventListener('click', function(event){ 

    event.preventDefault();

})*/

















    // let criandoTarefas = {
    //      "description": "",
    //      "completed": false
         
    // };

//            let getLogin = {
//             method: 'GET',
//             headers: {
//                 'content-type': 'application/json'
//             },

//         }

//         let urlCriarTarefa = `https://ctd-todo-api.herokuapp.com/v1/tasks`;

//         fetch(urlCriarTarefa, getLogin)

//         .then(response => {
//             console.log(response);
//             if(response.status == 201){
//                 return response.json()
//             }
//             throw response;
            
//         })
//         .then(data => {
//             loginEfetuado(data.jwt)
//             console.log(data)

//         })
        
//         .catch(error => {
//             loginErro(error.status)
//             alert ("Erro, tente novamente")

//         });
        
        
//     } else {
//         evento.preventDefault();
        
//     }
    
    
//         function loginEfetuado (jwtRecebido){
//         console.log("Json Recebido");
//         console.log(jwtRecebido);
//         sessionStorage.setItem('jwt', jwtRecebido)
//         window.location.href = 'tarefas.html'
    
//         }



//     let usuarioObjetoJson = JSON.stringify(usuarioObjeto);

        
//         let postLogin = {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: usuarioObjetoJson
//         }
        
//         let urlLogin = `https://ctd-todo-api.herokuapp.com/v1/users/login`;
        
//         fetch(urlLogin, postLogin) 
//         .then(response => {
//             console.log(response);
//             if(response.status == 201){
//                 return response.json()
//             }
//             throw response;
            
//         })
//         .then(data => {
//             loginEfetuado(data.jwt)
//             console.log(data)

//         })
        
//         .catch(error => {
//             loginErro(error.status)
//             alert ("Erro, tente novamente")

//         });
        
        
//     } else {
//         evento.preventDefault();
        
//     }
    
    
//         function loginEfetuado (jwtRecebido){
//         console.log("Json Recebido");
//         console.log(jwtRecebido);
//         sessionStorage.setItem('jwt', jwtRecebido)
//         window.location.href = 'tarefas.html'
    
//         }
//