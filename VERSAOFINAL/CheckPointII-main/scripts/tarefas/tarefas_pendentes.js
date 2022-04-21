let tarefasPendentesUl = document.querySelector(".tarefas-pendentes")

function renderizaTarefasPendentes(tarefa) {
    let liTarefaPendente = document.createElement('li');
    liTarefaPendente.classList.add("tarefa");

    liTarefaPendente.innerHTML = 
    `
        <div class="not-done" id="${tarefa.id}"></div>
        <div class = "descricao">
            <p class="nome">${tarefa.description}</p>
            <p class ="timestamp"><i class="far fa-calendar-alt"></i> ${tarefa.createdAt}</p>
            </div>
    `
   tarefasPendentesUl.appendChild(liTarefaPendente)
}