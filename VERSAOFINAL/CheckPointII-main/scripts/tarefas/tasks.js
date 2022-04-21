async function buscaUsuarioNaApi(tokenJwtArmazenado) {
    let urlGetUsuario = "https://ctd-todo-api.herokuapp.com/v1/users/getMe";

    let configuracaoRequisicao = {
        headers: {
            'Authorization': `${tokenJwtArmazenado}`,
        },
    };

    let resposta;
    let respostaJson

    try {
        resposta = await fetch(urlGetUsuario, configuracaoRequisicao);

        if (resposta.status ==200) {
            respostaJson = await resposta.json();
            alteraDadosUsuarioEmTela(respostaJson);
        } else {
            throw resposta.status
        }
    } catch (error) {
        let escolhaUsuario = confirm("Ocorreu algum erro ao buscar as informações do usuario logado")
        console.log(error);
        if(escolhaUsuario){
            buscaUsuarioNaApi(cookieJwt);
        }
    }
}
function alteraDadosUsuarioEmTela(objetoUsuarioRecebido){
    let nomeUsuarioEmTarefas = document.getElementById('nomeUsuarioEmTarefas');
    nomeUsuarioEmTarefas.innerText = `${objetoUsuarioRecebido.firstName} ${objetoUsuarioRecebido.lastName}`;
}

function buscaAsTarefasDoUsuario(tokenJwtArmazenado) {
    let urlGetTarefas = "https://ctd-todo-api.herokuapp.com/v1/tasks";
    let configuracaoRequisicao = {
        headers: {
            'Authorization': `${token.JwtArmazenado}`, 
        },
    };

fetch(urlGetTarefas, configuracaoRequisicao).then(
    resultado => {
        if (resultado.status ==200) {
            return resultado.json();
        }
        throw resultado.status;
    }
).then(
    resultado => {
        manipulandoTarefasusuario(resultado);
    }
).catch(
    erros => {
        console.log(erros);
    }
);

}

function manipulandoTarefasusuario(listaDeTarefas) {
    for (let tarefa of listaDeTarefas){

        if(tarefa.completed){
            console.log(tarefa.completed);
        } else {
            renderizaTarefasPendentes(tarefa);
        }
       
    }   
}

//botão cadastrar tarefas para usuário logado
let botaoCadastrar = document.getElementById("botaoTarefas");
botaoCadastrar.addEventListener('click', evento => {
    evento.preventDefault();


    let descricaoTarefa = document.getElementById('novaTarefa');
    let radioGrupo = document.getElementsByName('grupoRadio');
    let radioSelecionado;
    if(descricaoTarefa.value !=""){
        radioGrupo.forEach(radio => radioSelecionado = radio.checked);

        const objetoTarefa = {
            description: descricaoTarefa.value,
            completed: radioSelecionado
        }
        let objetoTarefaJson = JSON.stringify(objetoTarefa);
        let endPointCriarNovaTarfa = "https://ctd-todo-api.herokuapp.com/v1/tasks";

        let configuracoesRequisicao = {
            method: 'POST',
            body: objetoTarefaJson,
            headers: {
                'Content-type': 'application/json',
                'Authorization': `${cookieJwt}`
            },
        }
        fetch(endPointCriarNovaTarfa, configuracoesRequisicao)
            .then((response) => {
                if (response.status == 201){
                    return response.json()
                }
                throw response;
            }).then(resposta => {
                console.log(resposta);
            })
            .catch(error => {
                loginErro(error)
            });
    } else {
        evento.preventDefault();
        alert("Você deve informar uma descrição para a atividade")
    }
});








// a partir daqui 
// variaveis
//let nomeUsuario = document.querySelector('.user-info p');
//let token = sessionStorage.getItem('jwt');
//let novaTarefa = document.querySelector('.novaTarefa');
//let btnTarefa = pegarElementoID('criarTarefa');
//let btnSessao = pegarElementoID('closeApp');

// evento que executa uma função quando a página carregar
//onload = function () {
//    if (!token) {
//        location.href = 'index.html'
//    } else {
//        limparInput()
//        pegarUsuario(token)
//        listarTarefas(token)
//    }
//}


//evento para criar a nova tarefa 

//btnTarefa.addEventListener('click', event => {
//    event.preventDefault()
//    let textoNovaTarefa = novaTarefa.value;     // Captura o nome da tarefa digitada no input (captura dinâmica)
//    criarNovaTarefa(textoNovaTarefa)
//})

//evento para finalizar sessão

//btnSessao.addEventListener('click', e => {
//    e.preventDefault()
//    finalizarSessao()
// }) 