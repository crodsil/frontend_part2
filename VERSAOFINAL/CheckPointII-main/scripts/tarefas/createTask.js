const criarNovaTarefa = (entradaTarefa) => {

    let tarefa = {
        description: entradaTarefa,
        completed: false
    };

    const padraoVazio = /^$/;                                       // regexp para strings vazias
    const testeRegexVazio = padraoVazio.test(tarefa.description);   // retorna true se o nome da tarefa entrar na regra do Regexp

    if (testeRegexVazio === true) {
        console.log('A Tarefa não pode ser nome vazio.');

        return alert(`A Tarefa não pode ser nome vazio.`)
    } else {

        let urlCriarTarefa = "https://ctd-todo-api.herokuapp.com/v1/tasks";
        let novaTarefaJSON = JSON.stringify(tarefa);

        console.log(novaTarefaJSON);

        let endPoint = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': token
            },
            body: novaTarefaJSON
        }

        fetch(urlCriarTarefa, endPoint).then(response => {
            if (response.status == 201) {
                console.log(response)
                return response.json()

            } else {
                console.log(response)
                throw response.status
            }

        }).then(data => {
            tarefaPendente(data)
            return data.jwt

        }).catch(error => {
            if (error == 400) {
                console.log('Erro 400');
                alert('Erro 400')
            } else {
                console.log('Tentar novamente mais tarde');
                alert('Tentar novamente mais tarde')
            }
        })
    }
}