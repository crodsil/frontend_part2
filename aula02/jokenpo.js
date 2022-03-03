const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
const player = document.getElementById('player');
const resultado = document.getElementById('resultado');


function jogar() {
    if ((pedra.checked === false) && (papel.checked === false) && (tesoura.checked === false)) {
        alert('selecione uma opção:')
    } else {
        let sorteio = Math.floor(Math.random() * 3);
        switch (sorteio) {
            case 0:
                //document.getElementById('player') = 'pedra'
                player.src = 'pedra.jpg';
                break
            case 1:
                //document.getElementById('player') = 'papel'
                player.src = 'papel.png';
                break
            case 2:
                //document.getElementById('player') = 'tesoura'
                player.src = 'tesoura.png';
                break
        }

        //declaração de empate ou verificar qual jogador venceu (jogador x computador)
        if ((pedra.checked === true && sorteio === 0) || (papel.checked === true && sorteio === 1) || (tesoura.checked === true && sorteio === 2)) {
            resultado.innerText = 'empatou';
        } else if ((pedra.checked === true && sorteio === 2) || (papel.checked === true && sorteio === 0) || (tesoura.checked === true && sorteio === 1)) {
            resultado.innerText = 'jogador ganhou';
        } else {
            resultado.innerText = 'computador venceu';
        }
    }   
}

function resetar() {
    document.getElementById('player').src = 'player.png'
    document.getElementById('resultado').innerText = ''
}

