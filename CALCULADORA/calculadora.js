
alert("Começando a fazer nossos cálculos, bora?");
let nume1 = prompt("Digite um número");
let num1 = parseInt(nume1)
//converter o num1 para inteiro
let operacao = prompt("Digite o operador - + / ou *")
let nume2 = prompt("Digite o segundo número");
let num2 = parseInt(nume2)
// converter o num2 para inteiro
let retorno = alert("O resultado é: "+calcular())
// imports

let somar = require('.somar')
function calcular(){

if(operacao=="+"){
    return alert(somar)   
}

if(operacao=="-"){
    return alert(num1-num2)
}

if(operacao=="*"){
        return alert(num1*num2)
    }

if(operacao=="/" && num2!=0){
               return alert(num1/num2)}

else {
    return "Impossivel dividir por 0"
}

}

